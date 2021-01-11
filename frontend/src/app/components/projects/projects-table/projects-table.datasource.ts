import { Project } from './../project.model';
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
const EXAMPLE_DATA: Project[] = [
    // para alterar a estrutura do projeto mexer no arquivo project.model.ts
    /*
export interface Project {
    id? : number // ? question mark = opcional
    name: string
    type?: string // mobile |  web    |  multiplataform
    category?: string // ⭐️ basic app    |  ⭐️⭐️ modest / intermediate app   |    ⭐️⭐️⭐️ advanced app
    website?: string
    portfolio_link?: string // caminho para abrir no proprio site de portfolio
}
    */
    {
        name: 'Produtos Angular CRUD', launched_year: 2020,
        platform: 'Web', platform_icon: 'desktop_windows',
        category: '⭐️',
        website: 'portfolio.jvictor.com.br/products', portfolio_link: 'products', techs: '#TG',
        angular_present: 'show', reactNative_present: 'hide', telegramBot_present: 'hide', googleSheet_present: 'hide', 
        googleAppsScript_present: 'hide', digitalOcean_present: 'hide'
    },
    {
        name: 'Futebol Ao Vivo', launched_year: 2021,
        platform: 'Web', platform_icon: 'desktop_windows',
        category: '⭐️',
        website: 'bolanarede.net.br', portfolio_link: 'link', techs: '#TG',
        angular_present: 'show', reactNative_present: 'hide', telegramBot_present: 'hide', googleSheet_present: 'hide',
        googleAppsScript_present: 'show', digitalOcean_present: 'hide'
    },
    {
        name: 'TremdGol APP', launched_year: 2020,
        platform: 'Mobile', platform_icon: 'phone_android',
        category: '⭐️⭐️⭐️',
        website: '-', portfolio_link: '', techs: '#TG',
        angular_present: 'hide', reactNative_present: 'show', telegramBot_present: 'show', googleSheet_present: 'show', 
        googleAppsScript_present: 'show', digitalOcean_present: 'show'
    },
    {
        name: 'Bolão Rússia 2018', launched_year: 2018,
        platform: 'Telegram Chatbot', platform_icon: 'chat',
        category: '⭐️⭐️',
        website: 't.me/ZezinhoBolaoBot', portfolio_link: '', techs: '#TG',
        angular_present: 'hide', reactNative_present: 'hide', telegramBot_present: 'show', googleSheet_present: 'show', 
        googleAppsScript_present: 'show', digitalOcean_present: 'hide'
    },
    {
        name: 'TIPS', launched_year: 2020,
        platform: 'Telegram Chatbot', platform_icon: 'chat',
        category: '⭐️⭐️',
        website: 't.me/bolanaredetips', portfolio_link: '', techs: '#TG',
        angular_present: 'hide', reactNative_present: 'hide', telegramBot_present: 'show', googleSheet_present: 'show', 
        googleAppsScript_present: 'show', digitalOcean_present: 'hide'
    },
    {
        name: 'Prognósticos', launched_year: 2020,
        platform: 'Telegram Chatbot', platform_icon: 'chat',
        category: '⭐️⭐️',
        website: 't.me/', portfolio_link: 'link', techs: '#TG',
        angular_present: 'hide', reactNative_present: 'hide', telegramBot_present: 'show', googleSheet_present: 'show', 
        googleAppsScript_present: 'show', digitalOcean_present: 'hide'
    },
    {
        name: 'Bola na Rede', launched_year: 2018,
        platform: 'Telegram Chatbot', platform_icon: 'chat',
        category: '⭐️⭐️',
        website: 'bolanarede.net.br', portfolio_link: '', techs: '#TG',
        angular_present: 'hide', reactNative_present: 'hide', telegramBot_present: 'show', googleSheet_present: 'show', 
        googleAppsScript_present: 'show', digitalOcean_present: 'hide'
    },
    {
        name: 'Controle Financeiro', launched_year: 2017,
        platform: 'Telegram Chatbot', platform_icon: 'chat',
        category: '⭐️',
        website: '-', portfolio_link: 'controle-financeiro', techs: '#TG',
        angular_present: 'hide', reactNative_present: 'hide', telegramBot_present: 'show', googleSheet_present: 'show', 
        googleAppsScript_present: 'show', digitalOcean_present: 'hide'
    },
    {
        name: 'FireSafe', launched_year: 2020,
        platform: 'Mobile', platform_icon: 'phone_android',
        category: '⭐️',
        website: 'website', portfolio_link: 'link', techs: '#TG',
        angular_present: 'hide', reactNative_present: 'show', telegramBot_present: 'hide', googleSheet_present: 'hide', 
        googleAppsScript_present: 'hide', digitalOcean_present: 'hide'
    },
    {
        name: 'Agenda de Tarefas', launched_year: 2017,
        platform: 'Telegram Chatbot', platform_icon: 'chat',
        category: '⭐️',
        website: 't.me/', portfolio_link: 'link', techs: '#TG',
        angular_present: 'hide', reactNative_present: 'hide', telegramBot_present: 'show', googleSheet_present: 'show', 
        googleAppsScript_present: 'show', digitalOcean_present: 'hide'
    },
    {
        name: 'The Portfolio Bot', launched_year: 2021,
        platform: 'Telegram Chatbot', platform_icon: 'chat',
        category: '⭐️',
        website: 't.me/ThePortfolioBot', portfolio_link: 'link', techs: '#TG',
        angular_present: 'hide', reactNative_present: 'hide', telegramBot_present: 'show', googleSheet_present: 'hide', 
        googleAppsScript_present: 'show', digitalOcean_present: 'hide'
    }
];

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
// export class ProductRead2DataSource extends DataSource<ProductRead2Item> {
// data: ProductRead2Item[] = EXAMPLE_DATA;
export class ProjectDataSource extends DataSource<Project> {
    data: Project[] = EXAMPLE_DATA;
    paginator: MatPaginator;
    sort: MatSort;

    constructor() {
        super();
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    //connect(): Observable<ProductRead2Item[]> {
    connect(): Observable<Project[]> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange
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
    private getPagedData(data: Project[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    // private getSortedData(data: ProductRead2Item[]) {
    private getSortedData(data: Project[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'category': return compare(a.category, b.category, isAsc);
                case 'website': return compare(a.website, b.website, isAsc);
                case 'platform': return compare(a.platform, b.platform, isAsc);
                case 'launched_year': return compare(+a.launched_year, +b.launched_year, isAsc);
                default: return 0;
            }
        });
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
