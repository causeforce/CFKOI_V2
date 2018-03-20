import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        transition(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('700ms ease-in', style({transform: 'translateX(0%)', opacity: '1'}))
        ]),
        transition(':leave', [
            animate('700ms ease-out', style({transform: 'translateX(-100%)', opacity: '0'}))
        ])
    ])
];