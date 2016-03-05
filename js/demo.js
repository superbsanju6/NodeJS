/*
 * Copyright (c) 2014 DataTorrent, Inc. ALL Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

angular.module('app', [
    'ngRoute',
    'ui.dashboard',
    'angular-visualize-directive',
    'ui.bootstrap',
    'angularGrid',
    'ngSanitize',
    'elasticsearch'
])
    .run(function ($rootScope, $location) {

       
        $rootScope.$on('$routeChangeSuccess', function () {
            if($location.path() == "/report")
            {
                $rootScope.showReportSection = true;
            }
            else{
                $rootScope.showReportSection = false;
            }
        });

        $rootScope.getClass = function (path) {

          
            if ($location.path() == path) {
                return "active";
            } else if ($location.path() == "/report" && path == "/reports") {

                return "active";
            }

            else {
                return "";
            }
        }
    })

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'userlogin.html',
        controller: 'userController'
      })
        .when('/reports', {
            templateUrl: 'reports.html',
            controller: 'LayoutsDemoCtrl'
        })
        .when('/report', {
            templateUrl: 'report.html',
            controller: 'LayoutsDemoCtrl'
        })
        .when('/admin', {
            templateUrl: 'admin.html',
            controller: 'adminCtrl'
        })
         .when('/tabStudentProfile', {
             templateUrl: 'tabStudentProfile.html',
             controller: 'tabCtrl'
         })
        .when('/tabSchoolProfile', {
            templateUrl: 'tabSchoolProfile.html',
            controller: 'tabCtrl'
        })
        .when('/tabTeacherProfile', {
            templateUrl: 'tabTeacherProfile.html',
            controller: 'tabCtrl'
        })
      //.when('/explicit-saving', {
      //  templateUrl: 'view.html',
      //  controller: 'ExplicitSaveDemoCtrl'
      //})
        //.when('/reports',{
        //    redirectTo: '/layouts'
        
        //})
      //.when('/layouts', {
      //  templateUrl: 'layouts.html',
      //  controller: 'LayoutsDemoCtrl'
      //})
        .when('/dashboard', {
        templateUrl: 'layouts.html',
        controller: 'LayoutsDemoCtrl'
      })
      //.when('/layouts/explicit-saving', {
      //  templateUrl: 'layouts.html',
      //  controller: 'LayoutsDemoExplicitSaveCtrl'
      //})
      //.when('/layouts/dashboard-person', {
      //    templateUrl: 'layouts.html',
      //    controller: 'DashPersonCtrl'

    //  })
         .when('/layouts/state-zodiac', {
             templateUrl: 'layouts.html',
             controller: 'StateZodiacCtrl'

         })
        .when('/layouts/performance-dashboard', {
            templateUrl: 'layouts.html',
            controller: 'performanceDashboardCtrl'

        })
        .when('/layouts/new-school-test-performance', {
            templateUrl: 'layouts.html',
            controller: 'newSchoolTestPerformanceCTRL'

        })
        .when('/layouts/new-student-test-performance', {
            templateUrl: 'layouts.html',
            controller: 'newStudentTestPerformanceCTRL'

        })
      
        .when('/layouts/district-administrator-school-comparison-report-chart', {
            templateUrl: 'layouts.html',
            controller: 'district_Administrator_School_Comparison_Report_ChartCTRL'

        })
        .when('/layouts/district-administrator-school-performance-by-test', {
            templateUrl: 'layouts.html',
            controller: 'district_Administrator_School_Performance_by_TestCTRL'

        })
        .when('/layouts/district-administrator-school-standard-performance-by-subject-area-report', {
            templateUrl: 'layouts.html',
            controller: 'district_Administrator_School_Standard_Performance_by_Subject_Area_ReportCTRL'

        })
        .when('/layouts/district-administrator-school-standard-performance-by-subject-area-report-pie-chart', {
            templateUrl: 'layouts.html',
            controller: 'district_Administrator_School_Standard_Performance_by_Subject_Area_Report_Pie_ChartCTRL'

        })
      .when('/layouts/teacher-class-standard-proficiency-report', {
          templateUrl: 'layouts.html',
          controller: 'teacher_Class_Standard_Proficiency_ReportCTRL'

      })
      .when('/layouts/teacher-class-standard-progress-view-report', {
          templateUrl: 'layouts.html',
          controller: 'teacher_Class_Standard_Progress_View_ReportCTRL'

      })
        .when('/layouts/teacher-student-item-analysis-report', {
            templateUrl: 'layouts.html',
            controller: 'teacher_Student_Item_Analysis_ReportCTRL'

        })
        .when('/layouts/new-student-item-analysis-report', {
            templateUrl: 'layouts.html',
            controller: 'New_Item_Analysis_ReportCTRL'

        })
             .when('/layouts/new-student-roster', {
                 templateUrl: 'layouts.html',
                 controller: 'New_Student_RosterCTRL'

             })
        .when('/layouts/new-teacher-dashboard', {
            templateUrl: 'layouts.html',
            controller: 'NewTeacherDashboardCTRL'

        })
        .when('/layouts/new-district-standard-mastery-report', {
            templateUrl: 'layouts.html',
            controller: 'NewDistrictStandardMasteryCTRL'

        })
         .when('/layouts/new-school-standard-proficiency-report', {
             templateUrl: 'layouts.html',
             controller: 'NewSchoolStandardProficiencyCTRL'

         })
         .when('/layouts/new-class-standard-proficiency-report', {
             templateUrl: 'layouts.html',
             controller: 'NewClassStandardProficiencyCTRL'

         })
         .when('/layouts/new-student-standard-progress-report', {
             templateUrl: 'layouts.html',
             controller: 'NewStudentStandardProgressCTRL'

         })
      .when('/layouts/teacher-student-performance-report-chart', {
          templateUrl: 'layouts.html',
          controller: 'teacher_Student_Performance_Report_ChartCTRL'

      })
        .when('/layouts/teacher-student-remediation-report', {
            templateUrl: 'layouts.html',
            controller: 'teacher_Student_Remediation_ReportCTRL'

        })
      .when('/layouts/teacher-student-standard-performance-report', {
          templateUrl: 'layouts.html',
          controller: 'teacher_Student_Standard_Performance_ReportCTRL'

      })
      .when('/layouts/teacher-student-standard-progress-report', {
          templateUrl: 'layouts.html',
          controller: 'teacher_Student_Standard_Progress_ReportCTRL'

      })
      
        .when('/layouts/standard-chart', {
            templateUrl: 'layouts.html',
            controller: 'MasteryChartCtrl'

        })
         .when('/layouts/teacher-dashboard', {
             templateUrl: 'layouts.html',
             controller: 'teacher_Dashboard_ReportCTRL'

         })
        .when('/layouts/teacher-average-widget', {
            templateUrl: 'layouts.html',
            controller: 'teacher_Average_Widget_ReportCTRL'

        })
         .when('/layouts/teacher-class-average-widget', {
             templateUrl: 'layouts.html',
             controller: 'teacher_Class_Average_Widget_ReportCTRL'

         })
         .when('/layouts/teacher-district-average-widget', {
             templateUrl: 'layouts.html',
             controller: 'teacher_District_Average_Widget_ReportCTRL'

         })
         .when('/layouts/teacher-school-average-widget', {
             templateUrl: 'layouts.html',
             controller: 'teacher_School_Average_Widget_ReportCTRL'

         })
        .when('/layouts/teacher-student-performance-grid-only-widget', {
            templateUrl: 'layouts.html',
            controller: 'teacher_Student_Performance_GridOnly_ReportCTRL'

        })
        .when('/layouts/teacher-student-remediation-dash-widget', {
            templateUrl: 'layouts.html',
            controller: 'teacher_Student_Remediation_Dash_ReportCTRL'

        })
          .when('/layouts/teacher-item-analysis-report', {
              templateUrl: 'layouts.html',
              controller: 'teacher_Item_Analysis_ReportCTRL'

          })
         .when('/layouts/new-item-analysis-report', {
             templateUrl: 'layouts.html',
             controller: 'new_Item_Analysis_ReportCTRL'

         })
          .when('/layouts/new-district-standard-proficiency-report', {
              templateUrl: 'layouts.html',
              controller: 'newDistrictStandardProficiencyCTRL'

          })
         .when('/layouts/new-student-test-progress-report', {
             templateUrl: 'layouts.html',
             controller: 'newStudentTestProgressCTRL'

         })
        .when('/layouts/dashboard-colordistribution', {
            templateUrl: 'layouts.html',
            controller: 'DashColorDist'

        })
        .when('/layouts/administrator-student-standard-performance-report', {
            templateUrl: 'layouts.html',
            controller: 'administrator_Student_Standard_Performance_ReportCTRL'

        })
        .when('/layouts/coach-teacher-standard-performance-report', {
            templateUrl: 'layouts.html',
            controller: 'coach_Teacher_Standard_Performance_ReportCTRL'

        })
      .otherwise({
        redirectTo: '/'
      });
    //$locationProvider.html5Mode(true);
  })
  .factory('widgetDefinitions',  function (RandomDataModel) {
      var uRole = window.localStorage['userRole'];
     
      if (uRole == "School") {
          return [
         {
            
                name: 'Performance Summary Dashboard',
                directive: 'performance-dashboard',
                
                style: {
                    width: '100%',
                    height: '720px',
                 //   'min-width': '1430px !important'
                }
            
         },
          {

              name: 'Student Standard Performance Report',
              directive: 'administrator-student-standard-performance-report',
              style: {
                //  width: '996px'
              }

          }];
      }
      else if (uRole == "Teacher")
      {

          return [
          {
            name: 'Class Standard Proficiency Report',
            directive: 'teacher-class-standard-proficiency-report',
            style: {
               // width: '996px'
            }
          },
          {
              name: 'Class Standard Progress View Report',
              directive: 'teacher-class-standard-progress-view-report',
              style: {
                 // width: '996px'
              }
          },
          {
              name: 'Student Item Analysis Report',
              directive: 'teacher-student-item-analysis-report',
              style: {
                //  width: '996px'
              }
          },
          {
              name: 'Student Performance Report Chart',
              directive: 'teacher-student-performance-report-chart',
              style: {
                //  width: '996px'
              }
          },
          {
              name: 'Student Remediation Report',
              directive: 'teacher-student-remediation-report',
              style: {
                //  width: '996px'
              }
          },
          {
              name: 'Teacher Student Standard Performance Report',
              directive: 'teacher-student-standard-performance-report',
              style: {
               //   width: '996px'
              }
          },
          {
              name: 'Student Standard Progress Report',
              directive: 'teacher-student-standard-progress-report',
              style: {
                 // width: '996px'
              }
          }
        
         
          ];
      }
      else if (uRole == "Coach") {
          return[
          {
              

                  name: 'Teacher Standard Performance Report',
                  directive: 'coach-teacher-standard-performance-report',
                  style: {
                     // width: '996px'
                  }

              
         }
      ];
      }
      else if (uRole == "District") {

          return [
          {
              name: 'Student Standard Mastery Report',
              directive: 'standard-chart',
              style: {
                //  width: '996px'
              }
          },
          {
              name: 'School Comparison Report Chart',
              directive: 'district-administrator-school-comparison-report-chart',
              style: {
                //  width: '996px'
              }
          },
          {
              name: 'School Performance by Test',
              directive: 'district-administrator-school-performance-by-test',
              style: {
                //  width: '996px'
              }
          },
          {
              name: 'School Standard Performance by Subject Area Report',
              directive: 'district-administrator-school-standard-performance-by-subject-area-report',

          },
          {
              name: 'School Standard Performance by Subject Area Report Pie Chart',
              directive: 'district-administrator-school-standard-performance-by-subject-area-report-pie-chart',
              style: {
                 // width: '996px'
              }
          }
           
          ];
      }
      else if (uRole == "Superuser") {

          return [
              {
                  name: '<span>New</span> Student Roster',
                  directive: 'new-student-roster',

                  style: {

                  }

              },
           {
               name: '<span>New</span> Student Item Analysis',
               directive: 'new-student-item-analysis-report',

               style: {
                   width: '100%',

                   //'min-width': '700px !important'
               }

           },

             {
                 name: '<span>New</span> School Test Performance',
                 directive: 'new-school-test-performance',

                 style: {
                     //width: '100%',

                     //'min-width': '700px !important'
                 }

             },
              {
                  name: '<span>New</span> Student Test Performance',
                  directive: 'new-student-test-performance',

                  style: {
                      width: '100%',

                      //'min-width': '700px !important'
                  }

              },
                {
                    name: '<span>New</span> Teacher Dashboard',
                    directive: 'new-teacher-dashboard',

                    style: {
                        width: '100%',

                        //'min-width': '700px !important'
                    }

                },
                 {
                     name: '<span>New</span> District Standard Proficiency',
                     directive: 'new-district-standard-proficiency-report',

                     style: {
                         width: '100%',

                         //'min-width': '700px !important'
                     }

                 },

                 {
                     name: '<span>New</span> Student Remediation',
                     directive: 'new-student-remediation-report',

                     style: {
                         //width: '100%',

                         //'min-width': '700px !important'
                     }

                 },

                  {
                      name: '<span>New</span> District Standard Mastery',
                      directive: 'new-district-standard-mastery-report',

                      style: {
                          width: '100%',

                          //'min-width': '700px !important'
                      }

                  },

                   {
                       name: '<span>New</span> School Standard Proficiency',
                       directive: 'new-school-standard-proficiency-report',

                       style: {
                           width: '100%',

                           //'min-width': '700px !important'
                       }

                   },
                     {
                         name: '<span>New</span> Class Standard Proficiency',
                         directive: 'new-class-standard-proficiency-report',

                         style: {
                             width: '100%',

                             //'min-width': '700px !important'
                         }

                     },
                      {
                          name: '<span>New</span> Student Test Progress',
                          directive: 'new-student-test-progress-report',

                          style: {
                              width: '100%',

                              //'min-width': '700px !important'
                          }

                      },
                       {
                           name: '<span>New</span> Student Standard Progress',
                           directive: 'new-student-standard-progress-report',

                           style: {
                               // width: '100%',

                               //'min-width': '700px !important'
                           }

                       },
          {
              name: 'Student Standard Mastery Report',
              directive: 'standard-chart',
              style: {
                  //height: '500px'
               //   width: '996px'
              },
              size: {
                  //height: '680px'
              }
          },
           {
               name: 'Teacher Dashboard',
               directive: 'teacher-dashboard',
               
               style: {
                  width: '100%',
                  // height:'720px',
                   'min-width': '1430px !important'
               },
               //containerStyle: {'height':'680px'}
               //size: {
               //    height: '600px'
               //}
           },
              
           {
               name: 'Teacher Average Widget',
               directive: 'teacher-average-widget',
               style: {
                   //width: '100%',
                   //'min-width': '600px'
               }
           },
           {
               name: 'Class Average Widget',
               directive: 'teacher-class-average-widget',
               style: {
               // width: '100%',
               //    'min-width': '600px'
               }
           },
           {
               name: 'District Average Widget',
               directive: 'teacher-district-average-widget',
               style: {
                   // width: '100%',
                   //    'min-width': '600px'
               }
           },
           {
               name: 'School Average Widget',
               directive: 'teacher-school-average-widget',
               style: {
                   // width: '100%',
                   //    'min-width': '600px'
               }
           },
           {
               name: 'Student Performance Report',
               directive: 'teacher-student-performance-grid-only-widget',
               style: {
                   // width: '100%',
                   //    'min-width': '600px'
               }
           },
           {
               name: 'Student Remediation Report',
               directive: 'teacher-student-remediation-dash-widget',
               style: {
                   // width: '100%',
                   //    'min-width': '600px'
               }
           },
           {
               name: 'Item Analysis Report',
               directive: 'teacher-item-analysis-report',
               style: {
                   width: '100%',
                   //    'min-width': '600px'
               }
           },
          {
              name: 'School Comparison Report',
              directive: 'district-administrator-school-comparison-report-chart',
              style: {
               //   width: '996px'
              }
          },
          {
              name: 'School Performance Report',
              directive: 'district-administrator-school-performance-by-test',
              style: {
                //  width: '996px'
              }
          },
          //{
          //    name: 'School Standard Performance by Subject Area Report',
          //    directive: 'district-administrator-school-standard-performance-by-subject-area-report',

          //},
          {
              name: 'School Standard Performance by Subject Area Report',
              directive: 'district-administrator-school-standard-performance-by-subject-area-report-pie-chart',
              style: {
                //  width: '996px'
              }
          },
          {
              name: 'Class Standard Proficiency Report',
              directive: 'teacher-class-standard-proficiency-report',
              style: {
               //   width: '996px'
              }
          },
          {
              name: 'Class Standard Progress View Report',
              directive: 'teacher-class-standard-progress-view-report',
              style: {
               //   width: '996px'
              }
          },
          {
              name: 'Student Item Analysis Report',
              directive: 'teacher-student-item-analysis-report',
              style: {
               //   width: '996px'
              }
          },
          {
              name: 'Student Performance Report Chart',
              directive: 'teacher-student-performance-report-chart',
              style: {
               //   width: '996px'
              }
          },
          //{
          //    name: 'Student Remediation Report',
          //    directive: 'teacher-student-remediation-report',
          //    style: {
          //     //   width: '996px'
          //    }
          //},
          {
              name: 'Teacher Student Standard Performance Report',
              directive: 'teacher-student-standard-performance-report',
              style: {
                //  width: '996px'
              }
          },
          {
              name: 'Student Standard Progress Report',
              directive: 'teacher-student-standard-progress-report',
              style: {
                //  width: '996px'
              }
          },
          {

              name: 'Performance Summary Dashboard',
              directive: 'performance-dashboard',

              //size: { height: '430px' },
              style: {
                  width: '100%',
                  height: '480px',
               //   'min-width': '1430px !important'
              }
          },
          {

              name: 'Student Standard Performance Report',
              directive: 'administrator-student-standard-performance-report',
              style: {
               //   width: '996px'
              }

          },
           {


               name: 'Teacher Standard Performance Report',
               directive: 'coach-teacher-standard-performance-report',
               style: {
                 //  width: '996px'
               }


           },
             

          ];
      }
  })
  .value('defaultWidgets', [
    { name: 'random' },
    { name: 'time' },
    { name: 'datamodel' },
   
    
    {
      name: 'random',
        
    },
    {
      name: 'time',
      
    },
 
  ])
    //
      .controller('StateZodiacCtrl', function ($scope, $rootScope, $location) {

          $scope.dashboardOptions = {
              widgetButtons: true,
              widgetDefinitions: widgetDefinitions,
              defaultWidgets: defaultWidgets,
              storage: $window.localStorage,
              storageId: 'zodiacStorage'
          };

      })
    .controller('district_Administrator_School_Comparison_Report_ChartCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'District_Administrator_School_Comparison_Report_ChartStorage'
        };

    })
    .controller('District_Administrator_School_Performance_by_TestCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'District_Administrator_School_Performance_by_TestStorage'
        };

    })
    .controller('District_Administrator_School_Standard_Performance_by_Subject_Area_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'District_Administrator_School_Standard_Performance_by_Subject_Area_ReportStorage'
        };

    })
    .controller('District_Administrator_School_Standard_Performance_by_Subject_Area_Report_Pie_ChartCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'District_Administrator_School_Standard_Performance_by_Subject_Area_Report_Pie_ChartStorage'
        };

    })
    .controller('Teacher_Class_Standard_Proficiency_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'Teacher_Class_Standard_Proficiency_ReportStorage'
        };

    })
    .controller('Teacher_Class_Standard_Proficiency_View_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'Teacher_Class_Standard_Proficiency_View_ReportStorage'
        };

    })
    .controller('Teacher_Class_Standard_Progress_View_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'Teacher_Class_Standard_Progress_View_ReportStorage'
        };

    })
    .controller('Teacher_Student_Item_Analysis_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'Teacher_Student_Item_Analysis_ReportStorage'
        };

    })
    .controller('Teacher_Student_Performance_Report_ChartCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'Teacher_Student_Performance_Report_ChartStorage'
        };

    })
    .controller('Teacher_Student_Performance_Report_Chart_CrosstabCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'Teacher_Student_Performance_Report_Chart_CrosstabStorage'
        };

    })
    .controller('Teacher_Student_Remediation_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'Teacher_Student_Remediation_ReportStorage'
        };

    })
    .controller('Teacher_Student_Standard_Performance_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'Teacher_Student_Standard_Performance_ReportStorage'
        };

    })
    .controller('Teacher_Student_Standard_Progress_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'Teacher_Student_Standard_Progress_ReportStorage'
        };

    })
    .controller('MasteryChartCtrl', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'masteryChartStorage'
        };

    })
    .controller('performanceDashboardCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'performanceDashboardStorage'
        };

    })

    .controller('newSchoolTestPerformanceCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'newSchoolTestPerformanceStorage'
        };

    })
     .controller('newStudentTestPerformanceCTRL', function ($scope, $rootScope, $location) {

         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'newStudentTestPerformanceStorage'
         };

     })
     .controller('newTeacherDashboardCTRL', function ($scope, $rootScope, $location) {

         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'newTeacherDashboardStorage'
         };

     })
     .controller('newDistrictStandardProficiencyCTRL', function ($scope, $rootScope, $location) {

         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'newDistrictStandardProficiencyStorage'
         };

     })

     .controller('newStudentRemediationCTRL', function ($scope, $rootScope, $location) {

         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'newStudentRemediationStorage'
         };

     })

    .controller('newDistrictStandardMasteryCTRL', function ($scope, $rootScope, $location) {
        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'newDistrictStandardMasteryStorage'
        };

    })

    .controller('newSchoolStandardProficiencyCTRL', function ($scope, $rootScope, $location) {
        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'newSchoolStandardProficiencyStorage'
        };

    })

     .controller('newClassStandardProficiencyCTRL', function ($scope, $rootScope, $location) {
         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'newClassStandardProficiencyStorage'
         };

     })

     .controller('newStudentTestProgressCTRL', function ($scope, $rootScope, $location) {
         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'newStudentTestProgressStorage'
         };

     })

     .controller('newStudentStandardProgressCTRL', function ($scope, $rootScope, $location) {
         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'newStudentStandardProgressStorage'
         };

     })


    .controller('administrator_Student_Standard_Performance_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'Administrator_Student_Standard_Performance_ReportdStorage'
        };

    })
.controller('coach_Teacher_Standard_Performance_ReportCTRL', function ($scope, $rootScope, $location) {

    $scope.dashboardOptions = {
        widgetButtons: true,
        widgetDefinitions: widgetDefinitions,
        defaultWidgets: defaultWidgets,
        storage: $window.localStorage,
        storageId: 'coach_Teacher_Standard_Performance_ReportStorage'
    };

})

    .controller('teacher_Dashboard_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'teacher_Dashboard_ReportStorage'
        };

    })

    .controller('teacher_Average_Widget_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'teacher_Average_ReportStorage'
        };

    })

     .controller('teacher_Class_Average_Widget_ReportCTRL', function ($scope, $rootScope, $location) {

         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'teacher_Class_Average_ReportStorage'
         };

     })

     .controller('teacher_District_Average_Widget_ReportCTRL', function ($scope, $rootScope, $location) {

         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'teacher_District_Average_ReportStorage'
         };

     })

.service('elasticQuery', function ($rootScope,esFactory) {
    return esFactory({ host: 'http://52.3.213.207:9200/'}); //'localhost:9200'
})
       .controller('searchCtrl', function ($scope, $http, $rootScope, elasticQuery, $location) {
           $rootScope.studentId = "";
           $scope.openModal = function (val) {
               sessionService();
               var searchCategory = $('#searchCategory').find(":selected").text();

               //Open Student Profile
               if (searchCategory == "Students") {
                   elasticQuery.search({
                       index: 'allstudent11',
                       size: 1,
                       body: {
                           "fields": ["studentId", "fullname"],
                           "query": {
                               "bool": {
                                   "must": [{
                                       "query_string": {
                                           "query": "fullname:" + val
                                       }
                                   }]
                               }
                           }
                       }
                   }).then(function (response)
                   {
                       for (var i in response.hits.hits)
                       {
                           var fields = (response.hits.hits[i]).fields;

                           var tmpId = fields["studentId"];
                           $rootScope.studentId = tmpId[0];
                           window.localStorage['stdId'] = tmpId[0];
                           window.localStorage['stdName'] = fields['fullname'][0];
                           //$location.target = "_blank";
                           //$location.path('/tab');
                           window.open('#/tabStudentProfile');

                           //$('#btnInfoStudent').click();
                           //$('.modal-drill').on('shown.bs.modal', function () {
                           //    window.dispatchEvent(new Event('resize'));
                           //});
                       }

                   });
               }

               //Open Teacher Profile
               else if (searchCategory == "Teachers")
               {
                   elasticQuery.search({
                       index: 'allteacherss',
                       size: 1,
                       body: {
                           "fields": ["teacherId", "fullname"],
                           "query": {
                               "bool": {
                                   "must": [{
                                       "query_string": {
                                           "query": "fullname:" + val
                                       }
                                   }]
                               }
                           }
                       }
                   }).then(function (response)
                   {
                       for (var i in response.hits.hits)
                       {
                           var fields = (response.hits.hits[i]).fields;

                           var tmpId = fields["teacherId"];
                           $rootScope.studentId = tmpId[0];
                           window.localStorage['tchId'] = tmpId[0];
                           window.localStorage['tchName'] = fields['fullname'][0];
                           window.open('#/tabTeacherProfile');
                       }

                   });
                   
               }

               //Open School Profile
               else if (searchCategory == "Schools")
               {
                   elasticQuery.search({
                       index: 'allschoolss',
                       size: 1,
                       body: {
                           "fields": ["schoolId", "fullname"],
                           "query": {
                               "bool": {
                                   "must": [{
                                       "query_string": {
                                           "query": "fullname:" + val
                                       }
                                   }]
                               }
                           }
                       }
                   }).then(function (response)
                   {
                       for (var i in response.hits.hits)
                       {
                           var fields = (response.hits.hits[i]).fields;

                           var tmpId = fields["schoolId"];
                           $rootScope.studentId = tmpId[0];
                           window.localStorage['schId'] = tmpId[0];
                           window.localStorage['schName'] = fields['fullname'][0];
                           window.open('#/tabSchoolProfile');
                       }

                   });

               }
               
           }
           $scope.autocomplete = function(val) {
            $rootScope.studentId = "";
            var keywords = [];
            var searchCategory = $('#searchCategory').find(":selected").text();
            //keywords.push(val);
            // THIS RETURN IS VERY IMPORTANT 
            console.log(val);

            //Students Search
            if (searchCategory == "Students") {
                return elasticQuery.search({
                    index: 'allstudent11',
                    size: 25,
                    body: {
                        "fields": ["studentId", "fullname"],

                        "query": {
                            "query_string": {
                                "query": "*" + val + "*"
                            }
                        }

                    }
                }).then(function(response) {
                    for (var i in response.hits.hits) {
                        var fields = (response.hits.hits[i]).fields;
                        var tmpObject = fields["fullname"];
                        keywords.push(tmpObject);
                    }
                    return keywords;
                });
            }

            //Teachers Search
            else if (searchCategory == "Teachers") {
                return elasticQuery.search({
                    index: 'allteacherss',
                    size: 25,
                    body: {
                        "fields": ["teacherId", "fullname"],

                        "query": {
                            "query_string": {
                                "query": "*" + val + "*"
                            }
                        }

                    }
                }).then(function(response) {
                    for (var i in response.hits.hits) {
                        var fields = (response.hits.hits[i]).fields;
                        var tmpObject = fields["fullname"];
                        keywords.push(tmpObject);
                    }
                    return keywords;
                });
            }

            //Schools Search
            else if (searchCategory == "Schools")
            {
                return elasticQuery.search({
                    index: 'allschoolss',
                    size: 25,
                    body: {
                        "fields": ["stateSchoolCode", "fullname"],

                        "query": {
                            "query_string": {
                                "query": "*" + val + "*"
                            }
                        }

                    }
                }).then(function (response)
                {
                    for (var i in response.hits.hits)
                    {
                        var fields = (response.hits.hits[i]).fields;
                        var tmpObject = fields["fullname"];
                        keywords.push(tmpObject);
                    }
                    return keywords;
                });
            }

        }

    })

     .controller('teacher_School_Average_Widget_ReportCTRL', function ($scope, $rootScope, $location) {

         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'teacher_School_Average_ReportStorage'
         };

     })

    .controller('teacher_Student_Performance_GridOnly_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'teacher_Student_Performance_GridOnly_ReportStorage'
        };

    })

    .controller('teacher_Student_Remediation_Dash_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'teacher_Student_Remediation_Dash_ReportStorage'
        };

    })
     .controller('teacher_Item_Analysis_ReportCTRL', function ($scope, $rootScope, $location) {

         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'teacher_Item_Analysis_ReportStorage'
         };

     })

    .controller('New_Item_Analysis_ReportCTRL', function ($scope, $rootScope, $location) {

        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'new_Item_Analysis_ReportStorage'
        };

    })
     .controller('New_Student_RosterCTRL', function ($scope, $rootScope, $location) {

         $scope.dashboardOptions = {
             widgetButtons: true,
             widgetDefinitions: widgetDefinitions,
             defaultWidgets: defaultWidgets,
             storage: $window.localStorage,
             storageId: 'new_Student_RosterStorage'
         };

     })

    .controller('userController',function ($scope,$rootScope,$location,$http) {
        $rootScope.modelReport = "";
        $rootScope.showHeader = false;
        $rootScope.userRole = '';
        $rootScope.userLogedIn = window.localStorage['userLogedIn'];
        $rootScope.credential = [
        { username: 'steve', password: 'steve135', role: 'district' },
       { username: 'alex', password: 'alex135', role: 'school' },
       { username: 'adi', password: 'adi135', role: 'teacher' },
       { username: 'dan', password: 'dan135', role: 'school' },
        ]

        $scope.username = "";
        $scope.password = "";

        $scope.modalReloadX = function () {
            document.getElementById('TV').src = document.getElementById('TV').src
        }

        $scope.actionBtnForHelpModal = function () {
            sessionService();
            $('#btnForHelpModal').click();
        }
        $scope.openNewTab = function () {
            sessionService();
            
            $('#btnInfoStudent').click();
        }
  
        $scope.Login = function () {
            
            
            
            if ($scope.username.length > 0 && $scope.password.length > 0 && $scope.username != null  && $scope.password != null && $scope.username !="" && $scope.password!="" ) {
                var headers = {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                };
                $http({
                    method: 'POST',
                    url: "http://54.164.139.20:8080/api/login",
                    data: "username=" + $scope.username + "&password=" + $scope.password,
                    headers: headers
                }).success(function (response) {
                    if (response == null) {

                        $http({
                            method: 'POST',
                            url: "http://54.164.139.20:8080/api/addLog",
                            data: "id=40&username=Admin&activity=Login failed with username: "+$scope.username+" and password: "+$scope.password,
                            headers: headers
                        }).success(function (response) {

                        });
                        alert("Invalid credentials");
                    }
                    else {
                       
                        $rootScope.userRole = response.role;
                        $rootScope.userLogedIn = response.username;
                        window.localStorage['userLogedIn'] = $rootScope.userLogedIn;
                        window.localStorage['id'] = response._id;
                        window.localStorage['userRole'] = response.role;
                        window.localStorage['time'] = new Date();
                        //if (window.localStorage["modal"] == "1") {
                        //    window.localStorage['modal'] = "2";
                        //}
                        //else
                        //{
                        //    window.localStorage['modal'] = "1";
                        //}
                        //try{

                        
                        //    if (window.XMLHttpRequest) var xmlhttp = new XMLHttpRequest();
                        //    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

                        //    xmlhttp.open("GET", "http://api.hostip.info/get_html.php", false);
                        //    xmlhttp.send();

                        //    var hostipInfo = xmlhttp.responseText.split("\n");
                        //    var clientIp;
                        //    for (var i = 0; hostipInfo.length >= i; i++) {
                        //        var ipAddress = hostipInfo[i].split(":");

                        //        if (ipAddress[0] == "IP") {
                        //            clientIp = ipAddress[1];
                        //            break;
                        //       }
                        //    }
                        //     $http({
                        //         method: 'POST',
                        //        url: "http://54.164.139.20:8080/api/addLog",
                        //        data: "id=" + response._id + "&username=" + response.username + "&activity=Logged in the application with IP: "+clientIp,
                        //        headers: headers
                        //     }).success(function (response) {
                       
                        //    });
                        //}
                        //catch (err)
                        {
                            $http({
                                method: 'POST',
                                url: "http://54.164.139.20:8080/api/addLog",
                                data: "id=" + response._id + "&username=" + response.username + "&activity=Logged in the application",
                                headers: headers
                            }).success(function (response) {

                            });
                        }
                        $http({
                            method: 'POST',
                            url: "http://54.164.139.20:8080/api/getCarouselUser",
                            data: "id=1",
                            headers: headers
                        }).success(function (response) {
                            var x = response.userId;
                            var allUsers = x.split(",");
                            var isInCarousel = false;
                            //debugger;
                            for (var i = 0; i < allUsers.length; i++) {
                                if (allUsers[i] == window.localStorage['id']) {
                                    window.localStorage['modal'] = "2";
                                    isInCarousel = true;
                                    break;
                                }
                            }
                            if (!isInCarousel) {

                                window.localStorage['modal'] = "1";

                                if (x == "") {
                                    var ksdk = window.localStorage['id'];
                                } else {
                                    var ksdk = "," + window.localStorage['id'];
                                }
                                var concatUser = x.concat(ksdk);
                                $http({
                                    method: 'POST',
                                    url: "http://54.164.139.20:8080/api/saveCarouselUser",
                                    data: "userId=" + concatUser,
                                    headers: headers
                                }).success(function (response) {

                                });

                                window.localStorage['modal'] = "2";
                            }

                        });
                        $location.path('/dashboard');
                    }
                    
                })
                .error(function () {
                    $http({
                        method: 'POST',
                        url: "http://54.164.139.20:8080/api/addLog",
                        data: "id=40&username=Admin&activity=Node JS Server is Down",
                        headers: headers
                    }).success(function (response) {

                    });
                    alert("Can't log in");
                });
                

            } else {
                alert('Username and password required!');
            }

           
        }
    })


    .controller('onboardingCtrl', function ($scope, $modal, $log) {
        $scope.items = ['item1', 'item2', 'item3'];
        $scope.animationsEnabled = true;
        $scope.open = function (size) {
            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '../onboarding.html',
                controller: 'ModalInstanceCtrl',
                backdrop: 'static',
                windowClass: 'onboarding',
                //size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
        if (window.localStorage['modal'] == "1") {
            angular.element(document).ready(function () {
                window.localStorage['modal'] = "2";
                $scope.open('md');
              
            });
        }
    })
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    })
    .controller('CarouselDemoCtrl', function ($scope) {
        $scope.myInterval = 10000;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
            var newWidth = 1000 + slides.length + 1;
            slides.push({
                //image: '//placeimg.com/' +newWidth + '/800/tech' ,
                image: [
                    '../img/slide1.png',
                    '../img/slide0.png',
                    '../img/slide2.png',
                    '../img/slide3.png'
                ]
                [slides.length % 4],
                //image: '//placekitten.com/' + newWidth + '/300'
                //,
                title: [
                    'IMPROVE',
                    'Customize your dashboard, make it yours',
                    'Watch videos for easy learning',
                    'You are ready to go!']
                    [slides.length % 4]
                ,
                text: [
                    'The only application you\ll ever need for your educational needs',
                    'Create custom dashboards and populate them with widgets for your own needs. Filter the results and export them to various formats',
                    'We set up for you IMPROVE TV - instructional videos so you can learn it easy',
                    'For further questions contact the support team']
                    [slides.length % 4]
                //  ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };
        for (var i=0; i<4; i++) {
            $scope.addSlide();
        }
    })

    .controller('DashPersonCtrl', function ($scope, $interval, $window, widgetDefinitions, defaultWidgets, $rootScope) {
        $rootScope.showHeader = true;
        $scope.dashboardOptions = {
            widgetButtons: true,
            widgetDefinitions: widgetDefinitions,
            defaultWidgets: defaultWidgets,
            storage: $window.localStorage,
            storageId: 'dashPers'
        };
    })
    //DashColorDist
       .controller('DashColorDist', function ($scope, $interval, $window, widgetDefinitions, defaultWidgets, $rootScope) {
           $rootScope.showHeader = true;
           $scope.dashboardOptions = {
               widgetButtons: true,
               widgetDefinitions: widgetDefinitions,
               defaultWidgets: defaultWidgets,
               storage: $window.localStorage,
               storageId: 'dashColor'
           };
       })

  .controller('DemoCtrl', function ($scope, $interval, $window, widgetDefinitions, defaultWidgets, $rootScope) {
      $rootScope.showHeader = true;
      $scope.dashboardOptions = {
          widgetButtons: true,
          widgetDefinitions: widgetDefinitions,
          defaultWidgets: defaultWidgets,
          storage: $window.localStorage,
          storageId: 'demo'
      };
    $scope.randomValue = Math.random();
    $interval(function () {
        $scope.randomValue = Math.random();
    }, 500);
  })
  .controller('ExplicitSaveDemoCtrl', function ($scope, $interval, $window, widgetDefinitions, defaultWidgets, $rootScope) {
      $rootScope.showHeader = true;
    $scope.dashboardOptions = {
      widgetButtons: true,
      widgetDefinitions: widgetDefinitions,
      defaultWidgets: defaultWidgets,
      storage: $window.localStorage,
      storageId: 'explicitSave',
      explicitSave: true
    };
    $scope.randomValue = Math.random();
    $interval(function () {
      $scope.randomValue = Math.random();
    }, 500);
  })
  
   .controller('LogoutCtrl', function ($scope, $http, $location) {
       $scope.Logout = function () {
           var headers = {
               'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
           };
           if ((window.localStorage['demo-layouts'] != null) && (window.localStorage['demo-layouts'] != "")) {
               if (window.localStorage['storageParam'] !== null && window.localStorage['storageParam'] != "") {
                   $http({
                       method: 'POST',
                       url: "http://54.164.139.20:8080/api/saveTabs",
                       data: "id=" + window.localStorage['id'] + "&storage=" + window.localStorage['demo-layouts'] +"&storageParam="+ window.localStorage['storageParam'],
                       headers: headers
                   }).success(function (response) {

                       //window.localStorage['demo-layouts'] = response.storage;
                       //$scope.storage =
                       //window.localStorage['demo-layouts'] = "{'layouts':[{'title':'Custom','id':1,'active':true,'defaultWidgets':[]}],'states':{},'storageHash':'fs4df4d51'}";
                   });
               }
               else {
                   $http({
                       method: 'POST',
                       url: "http://54.164.139.20:8080/api/saveTabs",
                       data: "id=" + window.localStorage['id'] + "&storage=" + window.localStorage['demo-layouts'] + "&storageParam=\"\"",
                       headers: headers
                   }).success(function (response) {
                       //window.localStorage['demo-layouts'] = response.storage;
                       //$scope.storage =
                       //window.localStorage['demo-layouts'] = "{'layouts':[{'title':'Custom','id':1,'active':true,'defaultWidgets':[]}],'states':{},'storageHash':'fs4df4d51'}";
                   });
               }
              
           }
           $http({
               method: 'POST',
               url: "http://54.164.139.20:8080/api/addLog",
               data: "id=" + window.localStorage['id'] + "&username=" + window.localStorage['userLogedIn'] + "&activity=Logged out from the application",
               headers: headers
           }).success(function (response) {

           });
           console.log(window.localStorage['demo-layouts']);
           window.localStorage['demo-layouts'] = '';
           window.localStorage['userLogedIn'] = '';
           window.localStorage['id'] = '';
           window.localStorage['userRole'] = '';
           window.localStorage['storageParam'] = '';
           location.href='index.html';
       }
   })

  .controller('LayoutsDemoCtrl', function ($scope, widgetDefinitions, defaultWidgets,$window, LayoutStorage, $interval, $rootScope, $location,$http,$timeout) {
           
      if (window.localStorage['userLogedIn'] == '') {
          $location.path('/');
      } 
      $rootScope.userRole = window.localStorage['userRole'];
      $rootScope.showHeader = true;
      var headers = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      };
      $http({
          method: 'POST',
          url: "http://54.164.139.20:8080/api/getTabs",
          data: "id=" + window.localStorage['id'],
          headers: headers
      }).success(function (response) {
          window.localStorage['demo-layouts'] = response.storage;
          window.localStorage['storageParam'] = response.storageParam;
      });
      //sessionService();
      $timeout(function () {
          $scope.layoutOptions = {
              storageId: 'demo-layouts',
              storage: localStorage,
              storageHash: 'fs4df4d51',
              widgetDefinitions: widgetDefinitions,
              //defaultWidgets: defaultWidgets,
              defaultLayouts: window.localStorage['demo-layouts'].layouts
          };
      }, 100);
      
     
    $scope.randomValue = Math.random();

    $interval(function () {
      $scope.randomValue = Math.random();
    }, 500);
  })

  .controller('LayoutsDemoExplicitSaveCtrl', function ($scope, widgetDefinitions, defaultWidgets, LayoutStorage, $interval, $rootScope) {
      $rootScope.showHeader = true;
    $scope.layoutOptions = {
      storageId: 'demo-layouts',
      storage: localStorage,
      storageHash: 'fs4df4d51',
      widgetDefinitions: widgetDefinitions,
      defaultWidgets: defaultWidgets,
      explicitSave: true,
      defaultLayouts: [
            { title: 'Layout 1', active: true, defaultWidgets: defaultWidgets },
        { title: 'Layout 2', active: false, defaultWidgets: defaultWidgets },
        { title: 'Layout 3', active: false, defaultWidgets: defaultWidgets }
      ]
    };
    $scope.randomValue = Math.random();
    $interval(function () {
      $scope.randomValue = Math.random();
    }, 500);

  })
    .directive('stateZodiac', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/stateZodiacColor.html',

        };
    })
    .directive('districtAdministratorSchoolComparisonReportChart', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/District_Administrator_School_Comparison_Report_Chart.html',

        };
    })
    .directive('districtAdministratorSchoolPerformanceByTest', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/District_Administrator_School_Performance_by_Test.html',

        };
    })
    .directive('administratorStudentStandardPerformanceReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Administrator_Student_Standard_Performance_Report.html',

        };
    })
    .directive('coachTeacherStandardPerformanceReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Coach_Teacher_Standard_Performance_Report.html',

        };
    })
    .directive('districtAdministratorSchoolStandardPerformanceBySubjectAreaReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/District_Administrator_School_Standard_Performance_by_Subject_Area_Report.html',

        };
    })
    .directive('districtAdministratorSchoolStandardPerformanceBySubjectAreaReportPieChart', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/District_Administrator_School_Standard_Performance_by_Subject_Area_Report_Pie_Chart.html',

        };
    })
    .directive('performanceDashboard', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/performanceSummaryDashboard.html',

        };
    })
     .directive('newSchoolTestPerformance', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/New_School_Test_Performance.html',

         };
     })
     .directive('newStudentTestPerformance', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/New_Student_Test_Performance.html',

         };
     })
      .directive('newTeacherDashboard', function () {

          return {
              restrict: 'A',
              scope: true,
              templateUrl: 'widgetTemplate/New_Teacher_Dashboard.html',

          };
      })
     .directive('newDistrictStandardProficiencyReport', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/New_District_Standard_Proficiency_Report.html',

         };
     })
    .directive('newStudentRemediationReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/New_Student_Remediation.html',

        };
    })
     .directive('newDistrictStandardMasteryReport', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/New_District_Standard_Mastery.html',

         };
     })
    .directive('newSchoolStandardProficiencyReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/New_School_Standard_Proficiency.html',

        };
    })

     .directive('newStudentStandardProgressReport', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/New_Student_Standard_Progress.html',

         };
     })

    .directive('newClassStandardProficiencyReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/New_Class_Standard_Proficiency.html',

        };
    })

    .directive('newStudentTestProgressReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/New_Student_Test_Progress.html',

        };
    })

    .directive('teacherClassStandardProficiencyReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_Class_Standard_Proficiency_Report.html',

        };
    })
    .directive('teacherClassStandardProficiencyViewReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_Class_Standard_Proficiency_View_Report.html',

        };
    })
    .directive('teacherClassStandardProgressViewReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_Class_Standard_Progress_View_Report.html',

        };
    })
    .directive('teacherStudentItemAnalysisReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_Student_Item_Analysis_Report.html',

        };
    })
    .directive('newStudentItemAnalysisReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/New_Student_Item_Analysis_Report.html',

        };
    })
     .directive('newStudentRoster', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/New_Student_Roster.html',

         };
     })
    .directive('teacherStudentPerformanceReportChart', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_Student_Performance_Report_Chart.html',

        };
    })
    .directive('teacherStudentPerformanceReportChartCrosstab', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_Student_Performance_Report_Chart_Crosstab.html',

        };
    })
    .directive('teacherStudentRemediationReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_Student_Remediation_Report.html',

        };
    })
    .directive('teacherStudentStandardPerformanceReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_Student_Standard_Performance_Report.html',

        };
    })
    .directive('teacherStudentStandardProgressReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_Student_Standard_Progress_Report.html',

        };
    })
     .directive('teacherDashboard', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/Teacher_Dashboard.html',

         };
     })
     .directive('teacherAverageWidget', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/Teacher_Average_Widget.html',

         };
     })
      .directive('teacherClassAverageWidget', function () {

          return {
              restrict: 'A',
              scope: true,
              templateUrl: 'widgetTemplate/Teacher_Class_Average_Widget.html',

          };
      })
     .directive('teacherDistrictAverageWidget', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/Teacher_District_Average_Widget.html',

         };
     })
    .directive('teacherSchoolAverageWidget', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_School_Average_Widget.html',

        };
    })
     .directive('teacherStudentPerformanceGridOnlyWidget', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/Teacher_Student_Performance_Report_Grid_Only.html',

         };
     })
     .directive('teacherStudentRemediationDashWidget', function () {

         return {
             restrict: 'A',
             scope: true,
             templateUrl: 'widgetTemplate/Teacher_Student_Remediation_Report_ForTD.html',

         };
     })
    .directive('teacherItemAnalysisReport', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/Teacher_Item_Analysis_Report.html',

        };
    })
    .directive('standardChart', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/standardMasteryChart.html',

        };
    })
     .directive('dashboardPerson', function () {

         //return {
         //    restrict: 'A',
         //    scope: true,
         //    replace: true,
         //    template: '<div><visualize id="raport1" resource="Adrian/Top20_Person"> </visualize></div>',
         //    link: function(scope){
         //        scope.report = {
         //            resource: 'Adrian/Top20_Person',
         //          //  params:''
         //        };
         //    }

         //};
         return {
             restrict: 'A',
             scope: true, 
             templateUrl: 'widgetTemplate/top20person.html',
            
         };
     })
    .directive('dashboardColordistribution', function () {
 
        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/colorDistributionReport.html',

        };
    })
    .directive('dashboardColo', function () {

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'widgetTemplate/colorDistributionReport.html',

        };
    })
  .directive('wtTime', function ($interval) {
    return {
      restrict: 'A',
      scope: true,
      replace: true,
      template: '<div>Time<div class="alert alert-success">{{time}}</div></div>',
      link: function (scope) {
        function update() {
          scope.time = new Date().toLocaleTimeString();
        }

        update();

        var promise = $interval(update, 500);

        scope.$on('$destroy', function () {
          $interval.cancel(promise);
        });
      }
    };
  })
   
  .directive('wtScopeWatch', function () {
    return {
      restrict: 'A',
      replace: true,
      template: '<div>Value<div class="alert alert-info">{{value}}</div></div>',
      scope: {
        value: '=value'
      }
    };
  })
  .factory('RandomDataModel', function ($interval, WidgetDataModel) {
    function RandomDataModel() {
    }

    RandomDataModel.prototype = Object.create(WidgetDataModel.prototype);

    RandomDataModel.prototype.init = function () {
      this.updateScope('-');
      this.intervalPromise = $interval(function () {
        var value = Math.floor(Math.random() * 100);
        this.updateScope(value);
      }.bind(this), 500);
    };

    RandomDataModel.prototype.destroy = function () {
      WidgetDataModel.prototype.destroy.call(this);
      $interval.cancel(this.intervalPromise);
    };

    return RandomDataModel;
  })

.controller("adminCtrl", function ($scope, $http, $rootScope) {

    //var irishAthletes = ['John Joe Nevin', 'Katie Taylor', 'Paddy Barnes', 'Kenny Egan', 'Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];

    //var columnDefs = [
    //    {
    //        //headerName: "Username", field: "username", width: 300, filter: 'set',
    //        //filterParams: { cellHeight: 20, values: irishAthletes }
    //        headerName: "Username", field: "username", width: 200, minWidth: 150            },
    //    { headerName: "Activity", field: "activity", width: 1100, minWidth: 500, cellClass: 'cellToolTip' },
    //    { headerName: "Date", field: "date", width: 150, minWidth: 100 }
    //];

    var columnDefs = [
            {
                //headerName: "Username", field: "username", width: 300, filter: 'set',
                //filterParams: { cellHeight: 20, values: irishAthletes }
                headerName: "Username", field: "username", width: "25%"
            },
            { headerName: "Activity", field: "activity", width: "50%", cellClass: 'cellToolTip' },
            { headerName: "Date", field: "date", width: "25%" }
    ];

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: null,
        rowSelection: 'single',
      //  enableColResize: true,
        enableFilter: true
    };
    $rootScope.showHeader = true;
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };
    $http({
        method: 'POST',
        url: "http://54.164.139.20:8080/api/getLogs",
        headers: headers
    }).success(function (response) {
        $scope.gridOptions.rowData = response;
        $scope.gridOptions.api.onNewRows();

        $(".ag-header").niceScroll({
            cursorwidth: "0px",
        });
        $(".ag-body-viewport").niceScroll({
            cursorcolor: "#333",
            cursoropacitymin: .2,
            cursoropacitymax: .5,
            cursorwidth: "9px",
            cursorborder: "0",
            cursorborderradius: "3px",
            zindex: "110",
            scrollspeed: "60",
            touchbehavior: false,
            autohidemode: true
        });
        $(".ag-header-cell-menu-button").click(function () {
            $(".ag-filter-list-container").niceScroll({
                cursorcolor: "#333",
                cursoropacitymin: .2,
                cursoropacitymax: .5,
                cursorwidth: "9px",
                cursorborder: "0",
                cursorborderradius: "3px",
                zindex: "110",
                scrollspeed: "60",
                touchbehavior: false,
                autohidemode: true
            })
        });

    })
                .error(function () {
                    alert("Can't get the log data");
                });
    //$http.get("../olympicWinners.json")
    //    .then(function (res) {
    //        $scope.gridOptions.rowData = res.data;
    //        $scope.gridOptions.api.onNewRows();
    //    });
})

.controller("tabCtrl", function ($scope, $http, $rootScope) {
    $rootScope.showHeader = false;
});

