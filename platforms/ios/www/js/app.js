angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])
.run(function ($ionicPlatform, $rootScope, $location, $timeout) {

            $ionicPlatform.ready(function () {

              
            });
            $rootScope.$on("$locationChangeStart", function () {
                var nextUrl = $location.path();
                if (nextUrl != '/app/mp1' && nextUrl != '/app/mp3' && nextUrl != '/app/mp4' && nextUrl != '/app/mp5' && nextUrl != '/app/mp6' && nextUrl != '/app/mp7' && nextUrl != '/app/mp8' && nextUrl != '/app/tableofcontent') {
                    $timeout(function () {
                        $rootScope.url = nextUrl;
                        console.log(nextUrl);
                    }, 100);
                }
                $timeout(function () {
                    if (nextUrl != undefined) {
                        var nextUrlArr = nextUrl.split("/");
                        if (nextUrlArr[2] != undefined) {
                            var mainUrl = nextUrlArr[2].split("_");
                            console.log(mainUrl[0]);
                            $rootScope.headerurl = mainUrl[0];
                        }

                    }

                    $rootScope.sidebarClassBiographers = 'even item item-complex';
                    $rootScope.sidebarClassPolitics = 'odd item item-complex';
                    $rootScope.sidebarClassMap = 'even item item-complex';
                    $rootScope.sidebarClassAbout = 'odd item item-complex';
                    $rootScope.sidebarClassInvitation = 'even item item-complex';
                    $rootScope.sidebarClassContactus = 'odd item item-complex';
                    $rootScope.sidebarClassSendToFriend = 'even item item-complex';
                    if (nextUrl != '/app/home' && nextUrl != '/app/share' && nextUrl != '/app/biographers' && nextUrl != '/app/politics' && nextUrl != '/app/map' && nextUrl != '/app/about' && nextUrl != '/app/invitation' && nextUrl != '/app/contactus') {

                        $rootScope.sidebarClassBiographers = 'odd item item-complex';
                        $rootScope.sidebarClassPolitics = 'even item item-complex';
                        $rootScope.sidebarClassMap = 'odd item item-complex';
                        $rootScope.sidebarClassAbout = 'even item item-complex';
                        $rootScope.sidebarClassInvitation = 'odd item item-complex';
                        $rootScope.sidebarClassContactus = 'even item item-complex';
                        $rootScope.sidebarClassSendToFriend = 'odd item item-complex';

                    }

                }, 100);

            });
        })

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $stateProvider

                    .state('app', {
                        url: "/app",
                        abstract: true,
                        templateUrl: "templates/menu.html",
                        controller: 'AppCtrl'
                    })

                    .state('app.home', {
                        url: "/home",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/home.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part1_1', {
                        url: "/part1_1",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_1.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part1_2', {
                        url: "/part1_2",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_2.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part1_3', {
                        url: "/part1_3",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_3.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part1_4', {
                        url: "/part1_4",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_4.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part1_5', {
                        url: "/part1_5",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_5.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part1_6', {
                        url: "/part1_6",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_6.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part1_7', {
                        url: "/part1_7",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_7.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part1_8', {
                        url: "/part1_8",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_8.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part1_9', {
                        url: "/part1_9",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_9.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part1_10', {
                        url: "/part1_10",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_10.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part1_11', {
                        url: "/part1_11",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_11.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part1_12', {
                        url: "/part1_12",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_12.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part1_13', {
                        url: "/part1_13",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part1_13.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })


                    .state('app.part2', {
                        url: "/part2",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part2.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part2_14', {
                        url: "/part2_14",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part2_14.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })


                    .state('app.part3_15', {
                        url: "/part3_15",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part3_15.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part3_16', {
                        url: "/part3_16",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part3_16.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part3_17', {
                        url: "/part3_17",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part3_17.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part3_18', {
                        url: "/part3_18",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part3_18.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part3_19', {
                        url: "/part3_19",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part3_19.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part3_20', {
                        url: "/part3_20",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part3_20.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_21', {
                        url: "/part4_21",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_21.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_22', {
                        url: "/part4_22",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_22.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_23', {
                        url: "/part4_23",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_23.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_24', {
                        url: "/part4_24",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_24.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })


                    .state('app.part4_25', {
                        url: "/part4_25",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_25.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_26', {
                        url: "/part4_26",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_26.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_27', {
                        url: "/part4_27",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_27.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })


                    .state('app.part4_28', {
                        url: "/part4_28",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_28.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_29', {
                        url: "/part4_29",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_29.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_30', {
                        url: "/part4_30",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_30.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_31', {
                        url: "/part4_31",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_31.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_32', {
                        url: "/part4_32",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_32.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_33', {
                        url: "/part4_33",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_33.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_34', {
                        url: "/part4_34",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_34.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_35', {
                        url: "/part4_35",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_35.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part4_36', {
                        url: "/part4_36",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part4_36.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_37', {
                        url: "/part5_37",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_37.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_38', {
                        url: "/part5_38",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_38.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })


                    .state('app.part5_39', {
                        url: "/part5_39",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_39.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_40', {
                        url: "/part5_40",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_40.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_41', {
                        url: "/part5_41",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_41.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_42', {
                        url: "/part5_42",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_42.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_43', {
                        url: "/part5_43",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_43.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_44', {
                        url: "/part5_44",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_44.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_45', {
                        url: "/part5_45",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_45.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_46', {
                        url: "/part5_46",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_46.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_47', {
                        url: "/part5_47",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_47.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_48', {
                        url: "/part5_48",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_48.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_49', {
                        url: "/part5_49",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_49.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_50', {
                        url: "/part5_50",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_50.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_51', {
                        url: "/part5_51",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_51.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_52', {
                        url: "/part5_52",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_52.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_53', {
                        url: "/part5_53",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_53.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_54', {
                        url: "/part5_54",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_54.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_55', {
                        url: "/part5_55",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_55.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_56', {
                        url: "/part5_56",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_56.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_57', {
                        url: "/part5_57",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_57.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_58', {
                        url: "/part5_58",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_58.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_59', {
                        url: "/part5_59",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_59.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })


                    .state('app.part5_60', {
                        url: "/part5_60",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_60.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_61', {
                        url: "/part5_61",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_61.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_62', {
                        url: "/part5_62",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_62.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_63', {
                        url: "/part5_63",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_63.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_64', {
                        url: "/part5_64",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_64.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_65', {
                        url: "/part5_65",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_65.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_65b', {
                        url: "/part5_65b",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_65b.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_65c', {
                        url: "/part5_65c",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_65c.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_65d', {
                        url: "/part5_65d",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_65d.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })


                    .state('app.part5_65e', {
                        url: "/part5_65e",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_65e.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_65f', {
                        url: "/part5_65f",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_65f.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_65g', {
                        url: "/part5_65g",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_65g.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_66', {
                        url: "/part5_66",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_66.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_67', {
                        url: "/part5_67",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_67.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_68', {
                        url: "/part5_68",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_68.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_69', {
                        url: "/part5_69",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_69.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_70', {
                        url: "/part5_70",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_70.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_71', {
                        url: "/part5_71",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_71.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_72', {
                        url: "/part5_72",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_72.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_73', {
                        url: "/part5_73",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_73.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_74', {
                        url: "/part5_74",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_74.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_74b', {
                        url: "/part5_74b",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_74b.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_74c', {
                        url: "/part5_74c",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_74c.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part5_75', {
                        url: "/part5_75",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part5_75.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_76', {
                        url: "/part6_76",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_76.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_77', {
                        url: "/part6_77",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_77.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_78', {
                        url: "/part6_78",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_78.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_79', {
                        url: "/part6_79",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_79.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_80', {
                        url: "/part6_80",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_80.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_81', {
                        url: "/part6_81",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_81.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_81b', {
                        url: "/part6_81b",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_81b.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_81c', {
                        url: "/part6_81c",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_81c.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_81d', {
                        url: "/part6_81d",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_81d.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_81e', {
                        url: "/part6_81e",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_81e.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_82', {
                        url: "/part6_82",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_82.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_83', {
                        url: "/part6_83",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_83.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_84', {
                        url: "/part6_84",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_84.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_85', {
                        url: "/part6_85",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_85.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_86', {
                        url: "/part6_86",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_86.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_87', {
                        url: "/part6_87",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_87.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part6_88', {
                        url: "/part6_88",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_88.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_89', {
                        url: "/part6_89",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_89.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_90', {
                        url: "/part6_90",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_90.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_91', {
                        url: "/part6_91",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_91.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_92', {
                        url: "/part6_92",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_92.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_93', {
                        url: "/part6_93",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_93.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_94', {
                        url: "/part6_94",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_94.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_95', {
                        url: "/part6_95",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_95.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_96', {
                        url: "/part6_96",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_96.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_97', {
                        url: "/part6_97",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_97.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_98', {
                        url: "/part6_98",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_98.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_99', {
                        url: "/part6_99",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_99.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_100', {
                        url: "/part6_100",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_100.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_101', {
                        url: "/part6_101",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_101.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_102', {
                        url: "/part6_102",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_102.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_103', {
                        url: "/part6_103",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_103.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_103b', {
                        url: "/part6_103b",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_103b.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_103c', {
                        url: "/part6_103c",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_103c.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_103d', {
                        url: "/part6_103d",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_103d.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_103e', {
                        url: "/part6_103e",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_103e.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_103f', {
                        url: "/part6_103f",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_103f.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_103g', {
                        url: "/part6_103g",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_103g.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_104', {
                        url: "/part6_104",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_104.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_105', {
                        url: "/part6_105",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_105.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_106', {
                        url: "/part6_106",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_106.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_107', {
                        url: "/part6_107",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_107.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_108', {
                        url: "/part6_108",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_108.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_109', {
                        url: "/part6_109",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_109.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_110', {
                        url: "/part6_110",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_110.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_111', {
                        url: "/part6_111",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_111.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_112', {
                        url: "/part6_112",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_112.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_113', {
                        url: "/part6_113",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_113.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part6_114', {
                        url: "/part6_114",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part6_114.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_115', {
                        url: "/part7_115",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_115.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_116', {
                        url: "/part7_116",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_116.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_117', {
                        url: "/part7_117",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_117.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_118', {
                        url: "/part7_118",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_118.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_119', {
                        url: "/part7_119",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_119.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_119b', {
                        url: "/part7_119b",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_119b.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_119c', {
                        url: "/part7_119c",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_119c.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_119d', {
                        url: "/part7_119d",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_119d.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_120', {
                        url: "/part7_120",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_120.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_120b', {
                        url: "/part7_120b",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_120b.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_120c', {
                        url: "/part7_120c",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_120c.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_121', {
                        url: "/part7_121",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_121.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_122', {
                        url: "/part7_122",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_122.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })

                    .state('app.part7_123', {
                        url: "/part7_123",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_123.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_124', {
                        url: "/part7_124",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_124.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_125', {
                        url: "/part7_125",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_125.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_126', {
                        url: "/part7_126",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_126.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_127', {
                        url: "/part7_127",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_127.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_128', {
                        url: "/part7_128",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_128.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_129', {
                        url: "/part7_129",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_129.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_130', {
                        url: "/part7_130",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_130.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_131', {
                        url: "/part7_131",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_131.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_132', {
                        url: "/part7_132",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_132.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_133', {
                        url: "/part7_133",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_133.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_134', {
                        url: "/part7_134",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_134.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_135', {
                        url: "/part7_135",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_135.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_136', {
                        url: "/part7_136",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_136.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_137', {
                        url: "/part7_137",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_137.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_138', {
                        url: "/part7_138",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_138.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_139', {
                        url: "/part7_139",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_139.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_140d', {
                        url: "/part7_140",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_140.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_141', {
                        url: "/part7_141",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_141.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_142', {
                        url: "/part7_142",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_142.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_143', {
                        url: "/part7_143",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_143.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_144', {
                        url: "/part7_144",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_144.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_144b', {
                        url: "/part7_144b",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_144b.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_144c', {
                        url: "/part7_144c",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_144c.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part7_144d', {
                        url: "/part7_144d",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part7_144d.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_145', {
                        url: "/part8_145",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_145.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_146', {
                        url: "/part8_146",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_146.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_147', {
                        url: "/part8_147",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_147.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_148', {
                        url: "/part8_148",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_148.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_149', {
                        url: "/part8_149",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_149.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_150', {
                        url: "/part8_150",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_150.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_151', {
                        url: "/part8_151",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_151.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_152', {
                        url: "/part8_152",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_152.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_153', {
                        url: "/part8_153",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_153.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_154', {
                        url: "/part8_154",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_154.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_155', {
                        url: "/part8_155",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_155.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.part8_156', {
                        url: "/part8_156",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/part8_156.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    //mp1 = menu part 1
                    .state('app.mp1', {
                        url: "/mp1",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/right-menu/part_1.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.mp3', {
                        url: "/mp3",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/right-menu/part_3.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.mp4', {
                        url: "/mp4",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/right-menu/part_4.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.mp5', {
                        url: "/mp5",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/right-menu/part_5.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.mp6', {
                        url: "/mp6",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/right-menu/part_6.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.mp7', {
                        url: "/mp7",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/right-menu/part_7.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.mp8', {
                        url: "/mp8",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/right-menu/part_8.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.tableofcontent', {
                        url: "/tableofcontent",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/table_of_contents.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    //.state('app.sendtofriend', {
                    //    url: "/sendtofriend",
                    //    views: {
                    //        'menuContent': {
                    //            templateUrl: "templates/send_to_friend.html",
                    //            controller: 'CommonCtrl'
                    //        }
                    //    }
                    //})
                    .state('app.contactus', {
                        url: "/contactus",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/contact_us.html",
                                controller: 'SendMessageCtrl'
                            }
                        }
                    })
                    .state('app.biographers', {
                        url: "/biographers",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/biographers.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.politics', {
                        url: "/politics",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/politics.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.map', {
                        url: "/map",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/map.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.about', {
                        url: "/about",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/about.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
                    .state('app.invitation', {
                        url: "/invitation",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/invitation.html",
                                controller: 'CommonCtrl'
                            }
                        }
                    })
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/home');
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            $httpProvider.defaults.withCredentials = true;
        })

.directive('autoGrow', function () {
            return function (scope, element, attr) {
                var minHeight = element[0].offsetHeight,
                        paddingLeft = element.css('paddingLeft'),
                        paddingRight = element.css('paddingRight');

                var $shadow = angular.element('<div></div>').css({
                    position: 'absolute',
                    top: -10000,
                    left: -10000,
                    width: element[0].offsetWidth - parseInt(paddingLeft || 0) - parseInt(paddingRight || 0),
                    fontSize: element.css('fontSize'),
                    fontFamily: element.css('fontFamily'),
                    lineHeight: element.css('lineHeight'),
                    resize: 'none'
                });
                angular.element(document.body).append($shadow);

                var update = function () {
                    var times = function (string, number) {
                        for (var i = 0, r = ''; i < number; i++) {
                            r += string;
                        }
                        return r;
                    }

                    var val = element.val().replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/&/g, '&amp;')
                            .replace(/\n$/, '<br/>&nbsp;')
                            .replace(/\n/g, '<br/>')
                            .replace(/\s{2,}/g, function (space) {
                                return times('&nbsp;', space.length - 1) + ' '
                            });
                    $shadow.html(val);

                    element.css('height', Math.max($shadow[0].offsetHeight + 10 /* the "threshold" */, minHeight) + 'px');
                }

                element.bind('keyup keydown keypress change', update);
                update();
            }
        })

.factory('MediaSrv', function ($q, $ionicPlatform, $window) {
            var service = {
                loadMedia: loadMedia,
                getStatusMessage: getStatusMessage,
                getErrorMessage: getErrorMessage
            };

            function loadMedia(src, onError, onStatus, onStop) {
                var defer = $q.defer();
                $ionicPlatform.ready(function () {
                    var mediaSuccess = function () {
                        if (onStop) {
                            onStop();
                        }
                    };
                    var mediaError = function (err) {
                        _logError(src, err);
                        if (onError) {
                            onError(err);
                        }
                    };
                    var mediaStatus = function (status) {
                        if (onStatus) {
                            onStatus(status);
                        }
                    };

                    if ($ionicPlatform.is('android')) {
                        src = '/android_asset/www/' + src;
                    }
                    defer.resolve(new $window.Media(src, mediaSuccess, mediaError, mediaStatus));
                });
                return defer.promise;
            }

            function _logError(src, err) {
                console.error('media error', {
                    code: err.code,
                    message: getErrorMessage(err.code)
                });
            }

            function getStatusMessage(status) {
                if (status === 0) {
                    return 'Media.MEDIA_NONE';
                }
                else if (status === 1) {
                    return 'Media.MEDIA_STARTING';
                }
                else if (status === 2) {
                    return 'Media.MEDIA_RUNNING';
                }
                else if (status === 3) {
                    return 'Media.MEDIA_PAUSED';
                }
                else if (status === 4) {
                    return 'Media.MEDIA_STOPPED';
                }
                else {
                    return 'Unknown status <' + status + '>';
                }
            }

            function getErrorMessage(code) {
                if (code === 1) {
                    return 'MediaError.MEDIA_ERR_ABORTED';
                }
                else if (code === 2) {
                    return 'MediaError.MEDIA_ERR_NETWORK';
                }
                else if (code === 3) {
                    return 'MediaError.MEDIA_ERR_DECODE';
                }
                else if (code === 4) {
                    return 'MediaError.MEDIA_ERR_NONE_SUPPORTED';
                }
                else {
                    return 'Unknown code <' + code + '>';
                }
            }

            return service;
});
