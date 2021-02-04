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
    {
        name: 'My Portfolio (this website)', launched_year: 2021, project_icon: 'desktop_windows', platform: 'Web', category: '⭐️⭐️',
        website: 'portfolio.jvictor.com.br', website_text: '', portfolio_link: '',
        github_link: 'github.com/jvictorhub/portfolio', techs: '#TG', total_apis: 2, total_apis_owned: 2,
        angular: 'tech-tool-show', reactNative: 'hide', telegramBot_api: 'hide', googleSheet: 'hide',
        googleAppsScript: 'hide', digitalOcean: 'tech-tool-show', twitter_api: 'hide'
    },
    {
        name: 'Produtos Angular CRUD', launched_year: 2020, project_icon: 'desktop_windows', platform: 'Web', category: '⭐️',
        website: 'portfolio.jvictor.com.br/products', website_text: '', portfolio_link: 'products',
        github_link: 'github.com/jvictorhub/portfolio', techs: '#TG', total_apis: 1, total_apis_owned: 1,
        angular: 'tech-tool-show', reactNative: 'hide', telegramBot_api: 'hide', googleSheet: 'hide',
        googleAppsScript: 'hide', digitalOcean: 'tech-tool-show', twitter_api: 'hide'
    },
    {
        name: 'Futebol Ao Vivo', launched_year: 2021, project_icon: 'sports_soccer', platform: 'Web', category: '⭐️',
        website: 'bolanarede.net.br', website_text: '', portfolio_link: 'link',
        github_link: '', techs: '#TG', total_apis: 2, total_apis_owned: 1,
        angular: 'tech-tool-show', reactNative: 'hide', telegramBot_api: 'hide', googleSheet: 'hide',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'tech-tool-show', twitter_api: 'hide'
    },
    {
        name: 'TremdGol APP', launched_year: 2020, project_icon: 'sports_soccer', platform: 'Mobile', category: '⭐️⭐️⭐️',
        website: '-', website_text: '', portfolio_link: '',
        github_link: 'github.com/jvictorhub/hero1', techs: '#TG', total_apis: 6, total_apis_owned: 3,
        angular: 'hide', reactNative: 'tech-tool-show', telegramBot_api: 'tech-tool-show', googleSheet: 'tech-tool-show',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'tech-tool-show', twitter_api: 'tech-tool-show'
    },
    {
        name: 'Bolão Rússia 2018', launched_year: 2018, project_icon: 'sports_soccer', platform: 'Telegram Chatbot', category: '⭐️⭐️',
        website: 't.me/ZezinhoBolaoBot', website_text: '@ZezinhoBolaoBot', portfolio_link: '',
        github_link: '', techs: '#TG', total_apis: 2, total_apis_owned: 0,
        angular: 'hide', reactNative: 'hide', telegramBot_api: 'tech-tool-show', googleSheet: 'tech-tool-show',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'hide', twitter_api: 'hide'
    },
    {
        name: 'TIPS', launched_year: 2020, project_icon: 'sports_soccer', platform: 'Telegram Chatbot', category: '⭐️⭐️',
        website: 't.me/bolanaredetips', website_text: '', portfolio_link: '',
        github_link: '', techs: '#TG', total_apis: 3, total_apis_owned: 1,
        angular: 'hide', reactNative: 'hide', telegramBot_api: 'tech-tool-show', googleSheet: 'tech-tool-show',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'hide', twitter_api: 'tech-tool-show'
    },
    {
        name: 'Prognósticos', launched_year: 2020, project_icon: 'sports_soccer', platform: 'Telegram Chatbot', category: '⭐️⭐️',
        website: 't.me/', website_text: '', portfolio_link: 'link',
        github_link: '', techs: '#TG', total_apis: 2, total_apis_owned: 0,
        angular: 'hide', reactNative: 'hide', telegramBot_api: 'tech-tool-show', googleSheet: 'tech-tool-show',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'hide', twitter_api: 'hide'
    },
    {
        name: 'Bola na Rede', launched_year: 2018, project_icon: 'sports_soccer', platform: 'Telegram Chatbot', category: '⭐️⭐️',
        website: 'bolanarede.net.br', website_text: '', portfolio_link: '',
        github_link: '', techs: '#TG', total_apis: 5, total_apis_owned: 3,
        angular: 'hide', reactNative: 'hide', telegramBot_api: 'tech-tool-show', googleSheet: 'tech-tool-show',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'tech-tool-show', twitter_api: 'tech-tool-show'
    },
    */
    {
        name: 'Controle Financeiro', launched_year: 2017, project_icon: 'attach_money', platform: 'Telegram Chatbot', category: '⭐️',
        website: '-', website_text: '', portfolio_link: 'controle-financeiro',
        github_link: '', techs: '#TG', total_apis: 1, total_apis_owned: 0,
        angular: 'hide', reactNative: 'hide', telegramBot_api: 'tech-tool-show', googleSheet: 'tech-tool-show',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'hide', twitter_api: 'hide'
    }
    /*
    {
        name: 'FireSafe', launched_year: 2020, project_icon: 'local_fire_department', platform: 'Mobile', category: '⭐️',
        website: '2020.spaceappschallenge.org/challenges/confront/spot-fire-3/teams/firesafe', website_text: '2020 Nasa Space Apps Challange - Firesafe Team', portfolio_link: 'link',
        github_link: 'github.com/lacerdamarcelo/nasa_space_apps_2020', techs: '#TG', total_apis: 1, total_apis_owned: 0,
        angular: 'hide', reactNative: 'tech-tool-show', telegramBot_api: 'hide', googleSheet: 'hide',
        googleAppsScript: 'hide', digitalOcean: 'hide', twitter_api: 'hide'
    },
    {
        name: 'Medicine Reminder', launched_year: 2019, project_icon: 'health_and_safety', platform: 'Telegram Chatbot', category: '⭐️',
        website: 't.me/', website_text: '', portfolio_link: 'link',
        github_link: '', techs: '#TG', total_apis: 1, total_apis_owned: 0,
        angular: 'hide', reactNative: 'hide', telegramBot_api: 'tech-tool-show', googleSheet: 'tech-tool-show',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'hide', twitter_api: 'hide'
    },
    {
        name: 'Agenda de Tarefas', launched_year: 2017, project_icon: 'today', platform: 'Telegram Chatbot', category: '⭐️',
        website: 't.me/', website_text: '', portfolio_link: 'link',
        github_link: '', techs: '#TG', total_apis: 1, total_apis_owned: 0,
        angular: 'hide', reactNative: 'hide', telegramBot_api: 'tech-tool-show', googleSheet: 'tech-tool-show',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'hide', twitter_api: 'hide'
    },
    {
        name: 'The Portfolio Bot', launched_year: 2021, project_icon: 'work', platform: 'Telegram Chatbot', category: '⭐️',
        website: 't.me/ThePortfolioBot', website_text: '', portfolio_link: 'link',
        github_link: '', techs: '#TG', total_apis: 1, total_apis_owned: 0,
        angular: 'hide', reactNative: 'hide', telegramBot_api: 'tech-tool-show', googleSheet: 'hide',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'hide', twitter_api: 'hide'
    },
    {
        name: 'The Quotes Bot', launched_year: 2021, project_icon: 'work', platform: 'Telegram Chatbot', category: '⭐️',
        website: 't.me/TheQuotesRobot', website_text: '', portfolio_link: 'link',
        github_link: '', techs: '#TG', total_apis: 1, total_apis_owned: 0,
        angular: 'hide', reactNative: 'hide', telegramBot_api: 'tech-tool-show', googleSheet: 'hide',
        googleAppsScript: 'tech-tool-show', digitalOcean: 'hide', twitter_api: 'hide'
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
                case 'total_apis': return compare(+a.total_apis, +b.total_apis, isAsc);
                case 'total_apis_owned': return compare(+a.total_apis_owned, +b.total_apis_owned, isAsc);
                default: return 0;
            }
        });
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
