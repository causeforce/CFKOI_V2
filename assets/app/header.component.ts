import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";
import { DataService } from './data.service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import {SlideInOutAnimation} from "./animation";

import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [SlideInOutAnimation]
})
export class HeaderComponent {
    allTable:boolean = false;
    animationState = 'in';

    constructor(private authService: AuthService, private router: Router, private dataService: DataService) {

        $(document).ready(function() {
            $('.btn').on('click', function () {
                if ($(this).hasClass('alberta-btn')) {
                    $('.all-buttons-row').slideUp();
                    $('.btn-view').removeClass('view-hide');
                    $('.btn-view').text('View Table Menu');
                } else if ($(this).hasClass('toronto-btn')) {
                    $('.all-buttons-row').slideUp();
                    $('.btn-view').removeClass('view-hide');
                    $('.btn-view').text('View Table Menu');
                } else if ($(this).hasClass('vancouver-btn')) {
                    $('.all-buttons-row').slideUp();
                    $('.btn-view').removeClass('view-hide');
                    $('.btn-view').text('View Table Menu');
                } else if ($(this).hasClass('montreal-btn')) {
                    $('.all-buttons-row').slideUp();
                    $('.btn-view').removeClass('view-hide');
                    $('.btn-view').text('View Table Menu');
                } else if ($(this).hasClass('ow-toronto-btn')) {
                    $('.all-buttons-row').slideUp();
                    $('.btn-view').removeClass('view-hide');
                    $('.btn-view').text('View Table Menu');
                } else if ($(this).hasClass('perth-btn')) {
                    $('.all-buttons-row').slideUp();
                    $('.btn-view').removeClass('view-hide');
                    $('.btn-view').text('View Table Menu');
                } else if ($(this).hasClass('melbourne-btn')) {
                    $('.all-buttons-row').slideUp();
                    $('.btn-view').removeClass('view-hide');
                    $('.btn-view').text('View Table Menu');
                } else if ($(this).hasClass('brisbane-btn')) {
                    $('.all-buttons-row').slideUp();
                    $('.btn-view').removeClass('view-hide');
                    $('.btn-view').text('View Table Menu');
                } else if ($(this).hasClass('all-btn')) {
                    $('.all-buttons-row').slideUp();
                    $('.btn-view').removeClass('view-hide');
                    $('.btn-view').text('View Table Menu');
                }
            });
        });
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/signin']);
    }

    displayAll() {
        this.allTable = true;
        this.dataService.abTable = false;
    }

    toggleShowDiv(divName: string) {
        if (divName === 'ab-table') {
            console.log(this.animationState);
            this.animationState = this.animationState === 'out' ? 'in' : 'out';
            console.log(this.animationState);
        }
    }

    showHideTables(table) {
        if (table === 'alberta') {
            this.dataService.abTable = true;

            this.dataService.brTable = false;
            this.dataService.mlTable = false;
            this.dataService.moTable = false;
            this.dataService.owtoTable = false;
            this.dataService.prTable = false;
            this.dataService.toTable = false;
            this.dataService.vaTable = false;
            this.dataService.allTable = false;

        } else if (table === 'montreal') {
            this.dataService.moTable = true;

            this.dataService.abTable = false;
            this.dataService.brTable = false;
            this.dataService.mlTable = false;
            this.dataService.owtoTable = false;
            this.dataService.prTable = false;
            this.dataService.toTable = false;
            this.dataService.vaTable = false;
            this.dataService.allTable = false;

        } else if (table === 'toronto') {
            this.dataService.toTable = true;

            this.dataService.abTable = false;
            this.dataService.brTable = false;
            this.dataService.mlTable = false;
            this.dataService.moTable = false;
            this.dataService.owtoTable = false;
            this.dataService.prTable = false;
            this.dataService.vaTable = false;
            this.dataService.allTable = false;
        } else if (table === 'vancouver') {
            this.dataService.vaTable = true;

            this.dataService.abTable = false;
            this.dataService.brTable = false;
            this.dataService.mlTable = false;
            this.dataService.moTable = false;
            this.dataService.owtoTable = false;
            this.dataService.prTable = false;
            this.dataService.toTable = false;
            this.dataService.allTable = false;
        } else if (table === 'perth') {
            this.dataService.prTable = true;

            this.dataService.abTable = false;
            this.dataService.brTable = false;
            this.dataService.mlTable = false;
            this.dataService.moTable = false;
            this.dataService.owtoTable = false;
            this.dataService.toTable = false;
            this.dataService.vaTable = false;
            this.dataService.allTable = false;
        } else if (table === 'brisbane') {
            this.dataService.brTable = true;

            this.dataService.abTable = false;
            this.dataService.toTable = false;
            this.dataService.mlTable = false;
            this.dataService.moTable = false;
            this.dataService.owtoTable = false;
            this.dataService.prTable = false;
            this.dataService.vaTable = false;
            this.dataService.allTable = false;
        } else if (table === 'melbourne') {
            this.dataService.mlTable = true;

            this.dataService.abTable = false;
            this.dataService.brTable = false;
            this.dataService.toTable = false;
            this.dataService.moTable = false;
            this.dataService.owtoTable = false;
            this.dataService.prTable = false;
            this.dataService.vaTable = false;
            this.dataService.allTable = false;
        } else if (table === 'onewalk') {
            this.dataService.owtoTable = true;

            this.dataService.abTable = false;
            this.dataService.brTable = false;
            this.dataService.mlTable = false;
            this.dataService.moTable = false;
            this.dataService.toTable = false;
            this.dataService.prTable = false;
            this.dataService.vaTable = false;
            this.dataService.allTable = false;
        } else if (table === 'all') {
            this.dataService.allTable = true;

            this.dataService.brTable = false;
            this.dataService.mlTable = false;
            this.dataService.moTable = false;
            this.dataService.owtoTable = false;
            this.dataService.prTable = false;
            this.dataService.toTable = false;
            this.dataService.vaTable = false;
            this.dataService.abTable = false;
        }
    }
}