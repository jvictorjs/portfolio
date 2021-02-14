import { QuoteService } from './quote.service';

import { Quote } from './quote.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type 
/*
export interface ProductRead2Item {
  name: string;
  id: number;
}
*/

// TODO: replace this with real data from your application
// const EXAMPLE_DATA: ProductRead2Item[] = [
const EXAMPLE_DATA: Quote[] = [
    // para alterar a estrutura do projeto mexer no arquivo project.model.ts
    /*
    {
        quote: "This is a big quote to test the wrapping and align of the text on the page.  This is a big quote to test the wrapping and align of the text on the page. This is a big quote to test the wrapping and align of the text on the page.",
        author: "Author4"
    },
    {
        quote: "I can accept failure, everyone fails at something. But I can’t accept not trying.",
        author: "Michael Jordan"
    },
    {
        quote: "The key to success is failure.",
        author: "Michael Jordan"
    },
    {
        quote: "A hundred times every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.",
        author: "Albert Einstein"
    }
    */
];

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
// export class ProductRead2DataSource extends DataSource<ProductRead2Item> {
// data: ProductRead2Item[] = EXAMPLE_DATA;
export class QuoteDataSource extends DataSource<Quote> {
    data: Quote[] = [];
    paginator: MatPaginator;
    sort: MatSort;

    constructor(private quotes: Quote[]) {
        super();
        this.data = quotes
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    //connect(): Observable<ProductRead2Item[]> {
    connect(): Observable<Quote[]> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange,
            this.data
        ];

        return merge(...dataMutations).pipe(map(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }

    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    //  private getPagedData(data: ProductRead2Item[]) {
    private getPagedData(data: Quote[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    // private getSortedData(data: ProductRead2Item[]) {
    private getSortedData(data: Quote[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'quote': return compare(a.quote, b.quote, isAsc);
                case 'author': return compare(a.author, b.author, isAsc);
                default: return 0;
            }
        });
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
