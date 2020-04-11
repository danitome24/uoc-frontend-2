import {Component, OnInit} from '@angular/core';
import {AppSettings} from '../../shared/app.settings';
import {select, Store} from '@ngrx/store';
import * as fromConfig from '../reducers/configuration.reducer';
import * as fromConfigActions from '../actions/configuration.actions';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

    public availableAppLanguages;
    public sendNotifications$;

    constructor(private store: Store) {
    }

    ngOnInit(): void {
        this.availableAppLanguages = AppSettings.APP_LOCALES;
        this.sendNotifications$ = this.store.pipe(
            select(fromConfig.selectConfigurationSendNotifications),
        );
    }

    updateNotifications(event) {
        const sendNotifications = event.target.checked;
        this.store.dispatch(fromConfigActions.actions.notificationsUpdate({sendNotifications}));
    }
}
