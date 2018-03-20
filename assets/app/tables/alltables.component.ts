import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../auth/auth.service";
import { DataService } from './../data.service';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material';

import { SlideInOutAnimation } from '../animation';

import * as $ from 'jquery';

import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';
@Component({
    selector: 'all-tables',
    templateUrl: './alltables.component.html',
    styleUrls: ['./alltables.component.scss'],
    animations: [SlideInOutAnimation]
})
export class AllTablesComponent implements OnInit {
    animationState = 'out';
    myForm: FormGroup;
    data: any;
    private apiUrl = '/api/data';

    constructor(private router: Router, private http: HttpClient, private authService: AuthService, private dataService: DataService) {

        // this.getData('/api/data');

        $(document).ready(function(){
            $('.btn-view').on('click', function() {
                $('.all-buttons-row').slideToggle();
                $(this).toggleClass('view-hide');
                if ($(this).hasClass('view-hide')) {
                    $(this).text('Hide Table Menu');
                    $('.all-buttons-row').css('display', 'flex');
                } else {
                    $(this).text('View Table Menu');
                }
            });
        });
        // if (window.location.href.indexOf('alltables') == -1) {
        //      location.reload(true);
        // }
    }

    ngOnInit() {
        this.dataService.fetchData();
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    toggleShowDiv(divName: string) {
        if (divName === 'ab-table') {
            console.log(this.animationState);
            this.animationState = this.animationState === 'out' ? 'in' : 'out';
            console.log(this.animationState);
        }
    }
}