export const menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': false,
        'open': false,
        'chip': { 'value': 1, 'color': 'accent' },
        'sub': [
            {
                'name': 'Dashboard',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            }
        ]
    },
    {
        'name': 'Material Widget',
        'icon': 'widgets',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Buttons',
                'link': 'material-widgets/buttons',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'List',
                'link': 'material-widgets/list',
                'icon': 'list',
                'chip': false,
                'open': false,
            },
            {

                'name': 'Stepper',
                'link': 'material-widgets/stepper',
                'icon': 'view_week',
                'chip': false,
                'open': false,

            },
            {
                'name': 'Expansion',
                'link': 'material-widgets/expansion',
                'icon': 'web_aaset',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Progress Spinner',
                'link': 'material-widgets/spinner',
                'icon': 'cached',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Cards',
                'link': 'material-widgets/cards',
                'icon': 'crop_16_9',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Icons',
                'link': 'material-widgets/icons',
                'icon': 'gif',
                'chip': false,
                'open': false,
            },
            {

                'name': 'AutoComplete',
                'link': 'material-widgets/autocomplete',
                'icon': 'get_app',
                'chip': false,
                'open': false,
            },
            {
                'name': 'CheckBox',
                'link': 'material-widgets/checkbox',
                'icon': 'check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'DatePicker',
                'link': 'material-widgets/datepicker',
                'icon': 'date_range',
                'chip': false,
                'open': false,
            },

            {
                'name': 'Slider',
                'link': 'material-widgets/slider',
                'icon': 'keyboard_tab',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Slide Toggle',
                'link': 'material-widgets/slide-toggle',
                'icon': 'album',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Menu',
                'icon': 'menu',
                'link': 'material-widgets/menu',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Progress Bar',
                'link': 'material-widgets/progress-bar',
                'icon': 'trending_flat',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Input',
                'icon': 'input',
                'link': 'material-widgets/input',
                'open': false,
            },
            {
                'name': 'Radio',
                'icon': 'radio_button_checked',
                'link': 'material-widgets/radio',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Select',
                'icon': 'select_all',
                'link': 'material-widgets/select',
                'open': false,
            },
        ]
    },
    // {
    //     'name'   : 'Forms',
    //     'icon'   : 'mode_edit',
    //     'open'   : false,
    //     'link'   : false,
    //     'sub'    :  [
    //                     {
    //                         'name': 'Template Driven',
    //                         'icon': 'mode_edit',
    //                         'open'   : false,
    //                         'link':'forms/template_forms'
    //                     },
    //                     {
    //                         'name': 'Reactive Forms',
    //                         'icon': 'text_fields',
    //                         'open'   : false,
    //                         'link':'forms/reactive_forms'
    //                     }
    //                 ]
    // },
    // {
    //     'name': 'Tables',
    //     'icon': 'list',
    //     'link': false,
    //     'open': false,
    //     'chip': { 'value': 2, 'color': 'accent' },
    //     'sub': [
    //         {
    //             'name': 'Fixed',
    //             'icon': 'filter_list',
    //             'link': 'tables/fixed',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Feature',
    //             'icon': 'done_all',
    //             'link': 'tables/featured',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Responsive Tables',
    //             'icon': 'filter_center_focus',
    //             'link': 'tables/responsive',
    //             'open': false,
    //         }
    //     ]

    // },
    // {
    //     'name': 'Guarded Routes',
    //     'icon': 'mode_edit',
    //     'link': '/auth/guarded-routes',
    //     'open': false,
    // }, {
    //     'name': 'Scrumboard',
    //     'open': false,
    //     'link': '/auth/scrumboard',
    //     'icon': 'grade',
    // }, {
    //     'name': 'Applications',
    //     'icon': 'view_module',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'chat',
    //             'icon': 'chat',
    //             'link': 'chats/chat',
    //             'open': false,
    //         },
    //         {
    //             'name': 'mail',
    //             'icon': 'mail',
    //             'link': 'mail/mail',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Editor',
    //             'icon': 'editor',
    //             'link': 'editor/editor',
    //             'open': false,
    //         }
    //     ]
    // }
    // , {
    //     'name': 'Pages',
    //     'icon': 'content_copy',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'Login',
    //             'icon': 'work',
    //             'open': false,
    //             'link': '../login',
    //         }, {
    //             'name': 'Services',
    //             'icon': 'local_laundry_service',
    //             'open': false,
    //             'link': 'pages/services',
    //         }, {
    //             'name': 'Contact',
    //             'icon': 'directions',
    //             'open': false,
    //             'link': 'pages/contact'
    //         }
    //     ]
    // }
    // , {

    //     'name': 'Charts',
    //     'icon': 'pie_chart_outlined',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'chartjs',
    //             'icon': 'view_list',
    //             'link': 'charts/chartjs',
    //             'open': false,

    //         },
    //         {
    //             'name': 'ngx-chart',
    //             'icon': 'show_chart',
    //             'open': false,
    //             'link': 'charts/ngx-charts',
    //         },
    //         {
    //             'name': 'nvd3',
    //             'icon': 'pie_chart',
    //             'open': false,
    //             'link': 'charts/nvd3-charts',
    //         }
    //     ]
    // }, {
    //     'name': 'maps',
    //     'icon': 'map',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'google-map',
    //             'icon': 'directions',
    //             'link': 'maps/googlemap',
    //             'open': false,
    //         },
    //         {
    //             'name': 'leaflet-map',
    //             'icon': 'directions',
    //             'link': 'maps/leafletmap',
    //             'open': false,
    //         }
    //     ]
    // }, 
    {
        'name': 'Academics',
        'icon': 'all_inbox',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Create Academic Year',
                'icon': 'today',
                'link': 'academics/create-academics-yr',
                'open': false,
            },
            {
                'name': 'Create Section',
                'icon': 'create',
                'link': 'academics/create-section',
                'open': false,
            },
            {
                'name': 'Create Class',
                'icon': 'call_split',
                'link': 'academics/create-class',
                'open': false,
            },
            {
                'name': 'Limit Student in Class - Section',
                'icon': 'pan_tool',
                'link': 'academics/limit-section-student',
                'open': false,
            },
            {
                'name': 'Create Subject',
                'icon': 'import_contacts',
                'link': 'academics/create-subject',
                'open': false,
            },
            {
                'name': 'Create Category',
                'icon': 'add_circle',
                'link': 'academics/create-category',
                'open': false,
            },
            {
                'name': 'Create Religion',
                'icon': 'donut_small',
                'link': 'academics/create-religion',
                'open': false,
            },
            {
                'name': 'Create Cast',
                'icon': 'accessibility_new',
                'link': 'academics/create-cast',
                'open': false,
            },
            {
                'name': 'Class Subject Assign',
                'icon': 'compare_arrows',
                'link': 'academics/assign-class-subject',
                'open': false,
            },
            {
                'name': 'Class Teacher Allocation',
                'icon': 'donut_large',
                'link': 'academics/allocate-class-teacher',
                'open': false,
            },
            {
                'name': 'Define Period',
                'icon': 'explore',
                'link': 'academics/define-period',
                'open': false,
            },
            {
                'name': 'Create Class Timetable',
                'icon': 'schedule',
                'link': 'academics/create-class-timetable',
                'open': false,
            },
            {
                'name': 'View/Print Class Timetable',
                'icon': 'event_note',
                'link': 'academics/view-class-timetable',
                'open': false,
            },
            {
                'name': 'View Teacher Timetable',
                'icon': 'table_chart',
                'link': 'academics/view-teacher-timetable',
                'open': false,
            },
            {
                'name': 'Create Circular/Notice',
                'icon': 'confirmation_number',
                'link': 'academics/create-notice',
                'open': false,
            },
            {
                'name': 'Print Circular/Notice',
                'icon': 'print',
                'link': 'academics/print-notice',
                'open': false,
            }
        ]
    }, {
        'name': 'Teachers',
        'icon': 'account_circle',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Teacher',
                'icon': 'person_add',
                'link': 'teachers/add-teacher',
                'open': false,
            },
            {
                'name': 'View Teachere',
                'icon': 'how_to_reg',
                'link': 'teachers/view-teacher',
                'open': false,
            },
            {
                'name': 'Teachers Attendance',
                'icon': 'gesture',
                'link': 'teachers/attedence-teacher',
                'open': false,
            },
            {
                'name': 'View Teachers Attendence',
                'icon': 'ballot',
                'link': 'teachers/view-teacher-attendance',
                'open': false,
            },
            {
                'name': 'Teacher Payments',
                'icon': 'attach_money',
                'link': 'teachers/teacher-payment',
                'open': false,
            }
        ]
    }, {
        'name': 'Students',
        'icon': 'group',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Student Admission',
                'icon': 'group_add',
                'link': 'students/student-admission',
                'open': false,
            },
            {
                'name': 'Student ID Card',
                'icon': 'picture_in_picture',
                'link': 'students/generate-id-card',
                'open': false,
            },
            {
                'name': 'Student Records',
                'icon': 'recent_actors',
                'link': 'students/view-student-record',
                'open': false,
            },
            {
                'name': 'Student Attendance',
                'icon': 'add_comment',
                'link': 'students/view-student-attendance',
                'open': false,
            },
            {
                'name': 'Student Guardian',
                'icon': 'wc',
                'link': 'students/student-guardian',
                'open': false,
            },
            {
                'name': 'Student Attendance Report',
                'icon': 'layers',
                'link': 'students/student-attendance-report',
                'open': false,
            }
        ]
    }, {
        'name': 'Fees',
        'icon': 'monetization_on',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Fee Frequency',
                'icon': 'call_received',
                'link': 'fees/fee-frequency',
                'open': false,
            },
            {
                'name': 'Fee Name',
                'icon': 'chrome_reader_mode',
                'link': 'fees/fee-name',
                'open': false,
            },
            {
                'name': 'Class Wise Fee',
                'icon': 'settings_applications',
                'link': 'fees/class-wise-fee',
                'open': false,
            },
            {
                'name': 'Check Fee Status',
                'icon': 'visibility',
                'link': 'fees/fee-status-check',
                'open': false,
            },
            {
                'name': 'Fee Payments',
                'icon': 'play_for_work',
                'link': 'fees/fee-payments',
                'open': false,
            }
        ]
    }, {
        'name': 'Exam',
        'icon': 'spa',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Set Term',
                'icon': 'track_changes',
                'link': 'exams/set-term',
                'open': false,
            },
            {
                'name': 'Create Sittings',
                'icon': 'library_add',
                'link': 'exams/create-sittings',
                'open': false,
            },
            {
                'name': 'Set Exam',
                'icon': 'explicit',
                'link': 'exams/set-exams',
                'open': false,
            },
            {
                'name': 'Update Exam Marks',
                'icon': 'update',
                'link': 'exams/update-exam-marks',
                'open': false,
            },
            {
                'name': 'Generate Report Card',
                'icon': 'receipt',
                'link': 'exams/generate-report-card',
                'open': false,
            }
        ]
    }, {
        'name': 'Library',
        'icon': 'local_library',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Book Category',
                'icon': 'library_add',
                'link': 'library/add-book-category',
                'open': false,
            },
            {
                'name': 'Add Books',
                'icon': 'library_books',
                'link': 'library/add-book',
                'open': false,
            },
            {
                'name': 'Issue / Return / Re-new Books',
                'icon': 'compare_arrows',
                'link': 'library/issue-or-return-book',
                'open': false,
            }
        ]
    }, {
        'name': 'SMS / E-Mail',
        'icon': 'mail',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Mail',
                'icon': 'mail_outline',
                'link': 'email-sms/mail',
                'open': false,
            },
            {
                'name': 'Message',
                'icon': 'sms',
                'link': 'email-sms/message',
                'open': false,
            }
        ]
    }, {
        'name': 'Reports',
        'icon': 'description',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Student Report',
                'icon': 'list',
                'link': 'reports/student-report',
                'open': false,
            },
            {
                'name': 'Student Details',
                'icon': 'face',
                'link': 'reports/student-details',
                'open': false,
            },
            {
                'name': 'Fee Due Report',
                'icon': 'polymer',
                'link': 'reports/fee-due-report',
                'open': false,
            },
            {
                'name': 'Fee Paid Report',
                'icon': 'toc',
                'link': 'reports/fee-paid-report',
                'open': false,
            },
            {
                'name': 'Absentee Report',
                'icon': 'vertical_split',
                'link': 'reports/absentee-report',
                'open': false,
            }
        ]
    }, {
        'name': 'Alumnus',
        'icon': 'person_add_disabled',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'View Previous Students',
                'icon': 'school',
                'link': 'alumnus/view-previous-students',
                'open': false,
            },
            {
                'name': 'View Previous Teachers',
                'icon': 'people_outline',
                'link': 'alumnus/view-previous-teachers',
                'open': false,
            }
        ]
    }
];
