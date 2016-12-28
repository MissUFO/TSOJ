angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $state, $ionicModal, $timeout, $ionicPopup, $rootScope, MediaSrv, $rootScope) {
            
            $scope.audio = new Array();
            $scope.audioIndex = null;
            $scope.isPlay = new Array();
            $scope.lastIndex = null;

            $scope.btnShare = function () {

                if (window.plugins.socialsharing != undefined) {
                    window.plugins.socialsharing.share(
                      SOCIAL_MSG,
                      SOCIAL_SUB,
                      SOCIAL_IMG,
                      SOCIAL_URL);
                }

            };

            $scope.playAudio = function ($event, bioUrl, name) {

                if (name != undefined) {
                    $scope.CurrentPageAudioURL = audioUrl + bioUrl;
                    if (name == 'Matthew') {
                        $scope.audioIndex = 0;
                    } else if (name == 'Mark') {
                        $scope.audioIndex = 1;
                    } else if (name == 'Luke') {
                        $scope.audioIndex = 2;
                    } else if (name == 'John') {
                        $scope.audioIndex = 3;
                    }
                }
                else {
                    if ($rootScope.url == '/app/home') {
                        $scope.CurrentPageAudioURL = audioUrl + '0_1.mp3';
                        $scope.audioIndex = 4;
                    }
                    else if ($rootScope.url == '/app/invitation') {
                        $scope.CurrentPageAudioURL = audioUrl + '9_157.mp3';
                        $scope.audioIndex = 5;
                    }
                    else if ($rootScope.url == '/app/part1_1') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_1.mp3';
                        $scope.audioIndex = 6;
                    }
                    else if ($rootScope.url == '/app/part1_2') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_2.mp3';
                        $scope.audioIndex = 7;
                    }
                    else if ($rootScope.url == '/app/part1_3') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_3.mp3';
                        $scope.audioIndex = 8;
                    }
                    else if ($rootScope.url == '/app/part1_4') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_4.mp3';
                        $scope.audioIndex = 9;
                    }
                    else if ($rootScope.url == '/app/part1_5') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_5.mp3';
                        $scope.audioIndex = 10;
                    }
                    else if ($rootScope.url == '/app/part1_6') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_6.mp3';
                        $scope.audioIndex = 11;
                    }
                    else if ($rootScope.url == '/app/part1_7') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_7.mp3';
                        $scope.audioIndex = 12;
                    }
                    else if ($rootScope.url == '/app/part1_8') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_8.mp3';
                        $scope.audioIndex = 13;
                    }
                    else if ($rootScope.url == '/app/part1_9') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_9.mp3';
                        $scope.audioIndex = 14;
                    }
                    else if ($rootScope.url == '/app/part1_10') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_10.mp3';
                        $scope.audioIndex = 15;
                    }
                    else if ($rootScope.url == '/app/part1_11') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_11.mp3';
                        $scope.audioIndex = 16;
                    }
                    else if ($rootScope.url == '/app/part1_12') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_12.mp3';
                        $scope.audioIndex = 17;
                    }
                    else if ($rootScope.url == '/app/part1_13') {
                        $scope.CurrentPageAudioURL = audioUrl + '1_13.mp3';
                        $scope.audioIndex = 18;
                    }
                    else if ($rootScope.url == '/app/part2_14') {
                        $scope.CurrentPageAudioURL = audioUrl + '2_14.mp3';
                        $scope.audioIndex = 19;
                    }
                    else if ($rootScope.url == '/app/part3_15') {
                        $scope.CurrentPageAudioURL = audioUrl + '3_15.mp3';
                        $scope.audioIndex = 20;
                    }
                    else if ($rootScope.url == '/app/part3_16') {
                        $scope.CurrentPageAudioURL = audioUrl + '3_16.mp3';
                        $scope.audioIndex = 21;
                    }
                    else if ($rootScope.url == '/app/part3_17') {
                        $scope.CurrentPageAudioURL = audioUrl + '3_17.mp3';
                        $scope.audioIndex = 22;
                    }
                    else if ($rootScope.url == '/app/part3_18') {
                        $scope.CurrentPageAudioURL = audioUrl + '3_18.mp3';
                        $scope.audioIndex = 23;
                    }
                    else if ($rootScope.url == '/app/part3_19') {
                        $scope.CurrentPageAudioURL = audioUrl + '3_19.mp3';
                        $scope.audioIndex = 24;
                    }
                    else if ($rootScope.url == '/app/part3_20') {
                        $scope.CurrentPageAudioURL = audioUrl + '3_20.mp3';
                        $scope.audioIndex = 25;
                    }
                    else if ($rootScope.url == '/app/part4_21') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_21.mp3';
                        $scope.audioIndex = 26;
                    }
                    else if ($rootScope.url == '/app/part4_22') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_22.mp3';
                        $scope.audioIndex = 27;
                    }
                    else if ($rootScope.url == '/app/part4_23') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_23.mp3';
                        $scope.audioIndex = 28;
                    }
                    else if ($rootScope.url == '/app/part4_24') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_24.mp3';
                        $scope.audioIndex = 29;
                    }
                    else if ($rootScope.url == '/app/part4_25') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_25.mp3';
                        $scope.audioIndex = 30;
                    }
                    else if ($rootScope.url == '/app/part4_26') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_26.mp3';
                        $scope.audioIndex = 31;
                    }
                    else if ($rootScope.url == '/app/part4_27') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_27.mp3';
                        $scope.audioIndex = 32;
                    }
                    else if ($rootScope.url == '/app/part4_28') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_28.mp3';
                        $scope.audioIndex = 33;
                    }
                    else if ($rootScope.url == '/app/part4_29') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_29.mp3';
                        $scope.audioIndex = 34;
                    }
                    else if ($rootScope.url == '/app/part4_30') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_30.mp3';
                        $scope.audioIndex = 35;
                    }
                    else if ($rootScope.url == '/app/part4_31') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_31.mp3';
                        $scope.audioIndex = 36;
                    }
                    else if ($rootScope.url == '/app/part4_32') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_32.mp3';
                        $scope.audioIndex = 37;
                    }
                    else if ($rootScope.url == '/app/part4_33') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_33.mp3';
                        $scope.audioIndex = 38;
                    }
                    else if ($rootScope.url == '/app/part4_34') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_34.mp3';
                        $scope.audioIndex = 39;
                    }
                    else if ($rootScope.url == '/app/part4_35') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_35.mp3';
                        $scope.audioIndex = 40;
                    }
                    else if ($rootScope.url == '/app/part4_36') {
                        $scope.CurrentPageAudioURL = audioUrl + '4_36.mp3';
                        $scope.audioIndex = 41;
                    }
                    else if ($rootScope.url == '/app/part5_37') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_37.mp3';
                        $scope.audioIndex = 42;
                    }
                    else if ($rootScope.url == '/app/part5_38') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_38.mp3';
                        $scope.audioIndex = 43;
                    }
                    else if ($rootScope.url == '/app/part5_39') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_39.mp3';
                        $scope.audioIndex = 44;
                    }
                    else if ($rootScope.url == '/app/part5_40') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_40.mp3';
                        $scope.audioIndex = 45;
                    }
                    else if ($rootScope.url == '/app/part5_41') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_41.mp3';
                        $scope.audioIndex = 46;
                    }
                    else if ($rootScope.url == '/app/part5_42') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_42.mp3';
                        $scope.audioIndex = 47;
                    }
                    else if ($rootScope.url == '/app/part5_43') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_43.mp3';
                        $scope.audioIndex = 48;
                    }
                    else if ($rootScope.url == '/app/part5_44') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_44.mp3';
                        $scope.audioIndex = 49;
                    }
                    else if ($rootScope.url == '/app/part5_45') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_45.mp3';
                        $scope.audioIndex = 50;
                    }
                    else if ($rootScope.url == '/app/part5_46') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_46.mp3';
                        $scope.audioIndex = 51;
                    }
                    else if ($rootScope.url == '/app/part5_47') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_47.mp3';
                        $scope.audioIndex = 52;
                    }
                    else if ($rootScope.url == '/app/part5_48') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_48.mp3';
                        $scope.audioIndex = 53;
                    }
                    else if ($rootScope.url == '/app/part5_49') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_49.mp3';
                        $scope.audioIndex = 54;
                    }
                    else if ($rootScope.url == '/app/part5_50') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_50.mp3';
                        $scope.audioIndex = 55;
                    }
                    else if ($rootScope.url == '/app/part5_51') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_51.mp3';
                        $scope.audioIndex = 56;
                    }
                    else if ($rootScope.url == '/app/part5_52') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_52.mp3';
                        $scope.audioIndex = 57;
                    }
                    else if ($rootScope.url == '/app/part5_53') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_53.mp3';
                        $scope.audioIndex = 58;
                    }
                    else if ($rootScope.url == '/app/part5_54') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_54.mp3';
                        $scope.audioIndex = 59;
                    }
                    else if ($rootScope.url == '/app/part5_55') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_55.mp3';
                        $scope.audioIndex = 60;
                    }
                    else if ($rootScope.url == '/app/part5_56') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_56.mp3';
                        $scope.audioIndex = 61;
                    }
                    else if ($rootScope.url == '/app/part5_57') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_57.mp3';
                        $scope.audioIndex = 62;
                    }
                    else if ($rootScope.url == '/app/part5_58') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_58.mp3';
                        $scope.audioIndex = 63;
                    }
                    else if ($rootScope.url == '/app/part5_59') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_59.mp3';
                        $scope.audioIndex = 64;
                    }
                    else if ($rootScope.url == '/app/part5_60') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_60.mp3';
                        $scope.audioIndex = 65;
                    }
                    else if ($rootScope.url == '/app/part5_61') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_61.mp3';
                        $scope.audioIndex = 66;
                    }
                    else if ($rootScope.url == '/app/part5_62') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_62.mp3';
                        $scope.audioIndex = 67;
                    }
                    else if ($rootScope.url == '/app/part5_63') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_63.mp3';
                        $scope.audioIndex = 68;
                    }
                    else if ($rootScope.url == '/app/part5_64') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_64.mp3';
                        $scope.audioIndex = 69;
                    }
                    else if ($rootScope.url == '/app/part5_65') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_65.mp3';
                        $scope.audioIndex = 70;
                    }
                    else if ($rootScope.url == '/app/part5_65b') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_65b.mp3';
                        $scope.audioIndex = 71;
                    }
                    else if ($rootScope.url == '/app/part5_65c') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_65c.mp3';
                        $scope.audioIndex = 72;
                    }
                    else if ($rootScope.url == '/app/part5_65d') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_65d.mp3';
                        $scope.audioIndex = 73;
                    }
                    else if ($rootScope.url == '/app/part5_65e') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_65e.mp3';
                        $scope.audioIndex = 74;
                    }
                    else if ($rootScope.url == '/app/part5_65f') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_65f.mp3';
                        $scope.audioIndex = 75;
                    }
                    else if ($rootScope.url == '/app/part5_65g') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_65g.mp3';
                        $scope.audioIndex = 76;
                    }
                    else if ($rootScope.url == '/app/part5_66') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_66.mp3';
                        $scope.audioIndex = 77;
                    }
                    else if ($rootScope.url == '/app/part5_67') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_67.mp3';
                        $scope.audioIndex = 78;
                    }
                    else if ($rootScope.url == '/app/part5_68') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_68.mp3';
                        $scope.audioIndex = 79;
                    }
                    else if ($rootScope.url == '/app/part5_69') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_69.mp3';
                        $scope.audioIndex = 80;
                    }
                    else if ($rootScope.url == '/app/part5_70') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_70.mp3';
                        $scope.audioIndex = 81;

                    }
                    else if ($rootScope.url == '/app/part5_71') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_71.mp3';
                        $scope.audioIndex = 82;
                    }
                    else if ($rootScope.url == '/app/part5_72') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_72.mp3';
                        $scope.audioIndex = 83;
                    }
                    else if ($rootScope.url == '/app/part5_73') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_73.mp3';
                        $scope.audioIndex = 84;
                    }
                    else if ($rootScope.url == '/app/part5_74') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_74.mp3';
                        $scope.audioIndex = 85;
                    }
                    else if ($rootScope.url == '/app/part5_74b') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_74b.mp3';
                        $scope.audioIndex = 86;
                    }
                    else if ($rootScope.url == '/app/part5_74c') {
                        $scope.CurrentPageAudioURL = audioUrl + '5_74c.mp3';
                        $scope.audioIndex = 87;
                    }
                    else if ($rootScope.url == '/app/part6_75') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_75.mp3';
                        $scope.audioIndex = 88;
                    }
                    else if ($rootScope.url == '/app/part6_76') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_76.mp3';
                        $scope.audioIndex = 89;
                    }
                    else if ($rootScope.url == '/app/part6_77') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_77.mp3';
                        $scope.audioIndex = 90;
                    }
                    else if ($rootScope.url == '/app/part6_78') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_78.mp3';
                        $scope.audioIndex = 91;
                    }
                    else if ($rootScope.url == '/app/part6_79') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_79.mp3';
                        $scope.audioIndex = 92;
                    }
                    else if ($rootScope.url == '/app/part6_80') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_80.mp3';
                        $scope.audioIndex = 93;
                    }
                    else if ($rootScope.url == '/app/part6_81') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_81.mp3';
                        $scope.audioIndex = 94;
                    }
                    else if ($rootScope.url == '/app/part6_81b') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_81b.mp3';
                        $scope.audioIndex = 95;
                    }
                    else if ($rootScope.url == '/app/part6_81c') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_81c.mp3';
                        $scope.audioIndex = 96;
                    }
                    else if ($rootScope.url == '/app/part6_81d') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_81d.mp3';
                        $scope.audioIndex = 97;
                    }
                    else if ($rootScope.url == '/app/part6_81e') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_81e.mp3';
                        $scope.audioIndex = 98;
                    }
                    else if ($rootScope.url == '/app/part6_82') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_82.mp3';
                        $scope.audioIndex = 99;
                    }
                    else if ($rootScope.url == '/app/part6_83') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_83.mp3';
                        $scope.audioIndex = 100;
                    }
                    else if ($rootScope.url == '/app/part6_84') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_84.mp3';
                        $scope.audioIndex = 101;
                    }
                    else if ($rootScope.url == '/app/part6_85') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_85.mp3';
                        $scope.audioIndex = 102;
                    }
                    else if ($rootScope.url == '/app/part6_86') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_86.mp3';
                        $scope.audioIndex = 103;
                    }
                    else if ($rootScope.url == '/app/part6_87') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_87.mp3';
                        $scope.audioIndex = 104;
                    }
                    else if ($rootScope.url == '/app/part6_88') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_88.mp3';
                        $scope.audioIndex = 105;
                    }
                    else if ($rootScope.url == '/app/part6_89') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_89.mp3';
                        $scope.audioIndex = 106;
                    }
                    else if ($rootScope.url == '/app/part6_90') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_90.mp3';
                        $scope.audioIndex = 107;
                    }
                    else if ($rootScope.url == '/app/part6_91') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_91.mp3';
                        $scope.audioIndex = 108;
                    }
                    else if ($rootScope.url == '/app/part6_92') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_92.mp3';
                        $scope.audioIndex = 109;
                    }
                    else if ($rootScope.url == '/app/part6_93') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_93.mp3';
                        $scope.audioIndex = 110;
                    }
                    else if ($rootScope.url == '/app/part6_94') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_94.mp3';
                        $scope.audioIndex = 111;
                    }
                    else if ($rootScope.url == '/app/part6_95') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_95.mp3';
                        $scope.audioIndex = 112;
                    }
                    else if ($rootScope.url == '/app/part6_96') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_96.mp3';
                        $scope.audioIndex = 113;
                    }
                    else if ($rootScope.url == '/app/part6_97') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_97.mp3';
                        $scope.audioIndex = 114;
                    }
                    else if ($rootScope.url == '/app/part6_98') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_98.mp3';
                        $scope.audioIndex = 115;
                    }
                    else if ($rootScope.url == '/app/part6_99') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_99.mp3';
                        $scope.audioIndex = 116;
                    }
                    else if ($rootScope.url == '/app/part6_100') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_100.mp3';
                        $scope.audioIndex = 117;
                    }
                    else if ($rootScope.url == '/app/part6_101') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_101.mp3';
                        $scope.audioIndex = 118;
                    }
                    else if ($rootScope.url == '/app/part6_102') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_102.mp3';
                        $scope.audioIndex = 119;
                    }
                    else if ($rootScope.url == '/app/part6_103') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_103.mp3';
                        $scope.audioIndex = 120;
                    }
                    else if ($rootScope.url == '/app/part6_103b') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_103b.mp3';
                        $scope.audioIndex = 121;
                    }
                    else if ($rootScope.url == '/app/part6_103c') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_103c.mp3';
                        $scope.audioIndex = 122;
                    }
                    else if ($rootScope.url == '/app/part6_103d') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_103d.mp3';
                        $scope.audioIndex = 123;
                    }
                    else if ($rootScope.url == '/app/part6_103e') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_103e.mp3';
                        $scope.audioIndex = 124;
                    }
                    else if ($rootScope.url == '/app/part6_103f') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_103f.mp3';
                        $scope.audioIndex = 125;
                    }
                    else if ($rootScope.url == '/app/part6_103g') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_103g.mp3';
                        $scope.audioIndex = 126;
                    }
                    else if ($rootScope.url == '/app/part6_104') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_104.mp3';
                        $scope.audioIndex = 127;
                    }
                    else if ($rootScope.url == '/app/part6_105') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_105.mp3';
                        $scope.audioIndex = 128;
                    }
                    else if ($rootScope.url == '/app/part6_106') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_106.mp3';
                        $scope.audioIndex = 129;
                    }
                    else if ($rootScope.url == '/app/part6_107') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_107.mp3';
                        $scope.audioIndex = 130;
                    }
                    else if ($rootScope.url == '/app/part6_108') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_108.mp3';
                        $scope.audioIndex = 131;
                    }
                    else if ($rootScope.url == '/app/part6_109') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_109.mp3';
                        $scope.audioIndex = 132;
                    }
                    else if ($rootScope.url == '/app/part6_110') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_110.mp3';
                        $scope.audioIndex = 133;
                    }
                    else if ($rootScope.url == '/app/part6_111') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_111.mp3';
                        $scope.audioIndex = 134;
                    }
                    else if ($rootScope.url == '/app/part6_112') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_112.mp3';
                        $scope.audioIndex = 135;
                    }
                    else if ($rootScope.url == '/app/part6_113') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_113.mp3';
                        $scope.audioIndex = 136;
                    }
                    else if ($rootScope.url == '/app/part6_114') {
                        $scope.CurrentPageAudioURL = audioUrl + '6_114.mp3';
                        $scope.audioIndex = 137;
                    }
                    else if ($rootScope.url == '/app/part7_115') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_115.mp3';
                        $scope.audioIndex = 138;
                    }
                    else if ($rootScope.url == '/app/part7_116') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_116.mp3';
                        $scope.audioIndex = 139;
                    }
                    else if ($rootScope.url == '/app/part7_117') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_117.mp3';
                        $scope.audioIndex = 140;
                    }
                    else if ($rootScope.url == '/app/part7_118') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_118.mp3';
                        $scope.audioIndex = 141;
                    }
                    else if ($rootScope.url == '/app/part7_119') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_119.mp3';
                        $scope.audioIndex = 142;
                    }
                    else if ($rootScope.url == '/app/part7_120') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_120.mp3';
                        $scope.audioIndex = 143;
                    }
                    else if ($rootScope.url == '/app/part7_120b') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_120b.mp3';
                        $scope.audioIndex = 144;
                    }
                    else if ($rootScope.url == '/app/part7_120c') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_120c.mp3';
                        $scope.audioIndex = 145;
                    }
                    else if ($rootScope.url == '/app/part7_120d') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_120d.mp3';
                        $scope.audioIndex = 146;
                    }
                    else if ($rootScope.url == '/app/part7_121') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_121.mp3';
                        $scope.audioIndex = 147;
                    }
                    else if ($rootScope.url == '/app/part7_122') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_122.mp3';
                        $scope.audioIndex = 148;
                    }
                    else if ($rootScope.url == '/app/part7_123') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_123.mp3';
                        $scope.audioIndex = 149;
                    }
                    else if ($rootScope.url == '/app/part7_124') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_124.mp3';
                        $scope.audioIndex = 150;
                    }
                    else if ($rootScope.url == '/app/part7_125') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_125.mp3';
                        $scope.audioIndex = 151;
                    }
                    else if ($rootScope.url == '/app/part7_126') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_126.mp3';
                        $scope.audioIndex = 152;
                    }
                    else if ($rootScope.url == '/app/part7_127') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_127.mp3';
                        $scope.audioIndex = 153;
                    }
                    else if ($rootScope.url == '/app/part7_128') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_128.mp3';
                        $scope.audioIndex = 154;
                    }
                    else if ($rootScope.url == '/app/part7_129') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_129.mp3';
                        $scope.audioIndex = 155;
                    }
                    else if ($rootScope.url == '/app/part7_130') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_130.mp3';
                        $scope.audioIndex = 156;
                    }
                    else if ($rootScope.url == '/app/part7_131') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_131.mp3';
                        $scope.audioIndex = 157;
                    }
                    else if ($rootScope.url == '/app/part7_132') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_132.mp3';
                        $scope.audioIndex = 158;
                    }
                    else if ($rootScope.url == '/app/part7_133') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_133.mp3';
                        $scope.audioIndex = 159;
                    }
                    else if ($rootScope.url == '/app/part7_134') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_134.mp3';
                        $scope.audioIndex = 160;
                    }
                    else if ($rootScope.url == '/app/part7_135') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_135.mp3';
                        $scope.audioIndex = 161;
                    }
                    else if ($rootScope.url == '/app/part7_136') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_136.mp3';
                        $scope.audioIndex = 162;
                    }
                    else if ($rootScope.url == '/app/part7_137') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_137.mp3';
                        $scope.audioIndex = 163;
                    }
                    else if ($rootScope.url == '/app/part7_138') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_138.mp3';
                        $scope.audioIndex = 164;
                    }
                    else if ($rootScope.url == '/app/part7_139') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_139.mp3';
                        $scope.audioIndex = 165;
                    }
                    else if ($rootScope.url == '/app/part7_140') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_140.mp3';
                        $scope.audioIndex = 166;
                    }
                    else if ($rootScope.url == '/app/part7_141') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_141.mp3';
                        $scope.audioIndex = 167;
                    }
                    else if ($rootScope.url == '/app/part7_142') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_142.mp3';
                        $scope.audioIndex = 168;
                    }
                    else if ($rootScope.url == '/app/part7_143') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_143.mp3';
                        $scope.audioIndex = 169;
                    }
                    else if ($rootScope.url == '/app/part7_144') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_144.mp3';
                        $scope.audioIndex = 170;
                    }
                    else if ($rootScope.url == '/app/part7_144b') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_144b.mp3';
                        $scope.audioIndex = 171;
                    }
                    else if ($rootScope.url == '/app/part7_144c') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_144c.mp3';
                        $scope.audioIndex = 172;
                    }
                    else if ($rootScope.url == '/app/part7_144d') {
                        $scope.CurrentPageAudioURL = audioUrl + '7_144d.mp3';
                        $scope.audioIndex = 173;
                    }
                    else if ($rootScope.url == '/app/part8_145') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_145.mp3';
                        $scope.audioIndex = 174;
                    }
                    else if ($rootScope.url == '/app/part8_146') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_146.mp3';
                        $scope.audioIndex = 175;
                    }
                    else if ($rootScope.url == '/app/part8_147') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_147.mp3';
                        $scope.audioIndex = 176;
                    }
                    else if ($rootScope.url == '/app/part8_148') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_148.mp3';
                        $scope.audioIndex = 177;
                    }
                    else if ($rootScope.url == '/app/part8_149') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_149.mp3';
                        $scope.audioIndex = 178;
                    }
                    else if ($rootScope.url == '/app/part8_150') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_150.mp3';
                        $scope.audioIndex = 179;
                    }
                    else if ($rootScope.url == '/app/part8_151') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_151.mp3';
                        $scope.audioIndex = 180;
                    }
                    else if ($rootScope.url == '/app/part8_152') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_152.mp3';
                        $scope.audioIndex = 181;
                    }
                    else if ($rootScope.url == '/app/part8_153') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_153.mp3';
                        $scope.audioIndex = 182;
                    }
                    else if ($rootScope.url == '/app/part8_154') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_154.mp3';
                        $scope.audioIndex = 183;
                    }
                    else if ($rootScope.url == '/app/part8_155') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_155.mp3';
                        $scope.audioIndex = 184;
                    }
                    else if ($rootScope.url == '/app/part8_156') {
                        $scope.CurrentPageAudioURL = audioUrl + '8_156.mp3';
                        $scope.audioIndex = 185;
                    }
                }
                $scope.lastIndex = $scope.audioIndex;
                if ($scope.audio[$scope.audioIndex] == undefined) {
                    $.each($scope.audio, function (index, value) {
                        if (index != $scope.lastIndex) {
                            if ($scope.audio[index] != undefined) {
                                $scope.audio[index].pause();
                            }
                        }
                    });
                    $('.playAudio').show();
                    $('.pauseAudio').hide();
                    $scope.audio[$scope.audioIndex] = document.createElement('audio');
                    $scope.audio[$scope.audioIndex].src = $scope.CurrentPageAudioURL;
                }
                $.each($scope.audio, function (index, value) {
                    if ($scope.audio[index] != undefined) {
                        $scope.audio[index].pause();
                    }
                });

                $('.playAudio').show();
                $('.pauseAudio').hide();
                $scope.audio[$scope.audioIndex].play();
                $scope.isPlay[$scope.audioIndex] = true;
                if ($scope.isPlay[$scope.audioIndex]) {
                    var el = $event.currentTarget;
                    if (name != undefined) {
                        var nextEl = $(el).next();
                        $(el).next().show();
                        $(el).hide();
                        $(nextEl).on('click', function () {
                            $scope.audio[$scope.audioIndex].pause();
                            var prevEl = nextEl.prev();
                            $(nextEl).hide();
                            $(prevEl).show();
                            $scope.isPlay[$scope.audioIndex] = false;
                        })
                    } else {
                        $(el).hide();
                        var pauseAudio = $(el).next();
                        pauseAudio.show();
                        $(pauseAudio).on('click', function () {
                            $scope.audio[$scope.audioIndex].pause();
                            $(this).prev().show();
                            $(this).next().hide();
                            $scope.isPlay[$scope.audioIndex] = false;
                        })
                    }
                }


            }
            $scope.expandPopup = function () {
                var expandUrl = '';
                if ($rootScope.url == '/app/part1_1' || $rootScope.url == '/app/part1_2') {
                    var expandUrl = 'templates/expand_pages/expand1_2.html'
                }
                else if ($rootScope.url == '/app/part1_3') {
                    var expandUrl = 'templates/expand_pages/expand1_3.html'
                }
                else if ($rootScope.url == '/app/part1_4') {
                    var expandUrl = 'templates/expand_pages/expand1_4.html'
                }
                else if ($rootScope.url == '/app/part1_5') {
                    var expandUrl = 'templates/expand_pages/expand1_5.html'
                }
                else if ($rootScope.url == '/app/part1_6') {
                    var expandUrl = 'templates/expand_pages/expand1_6.html'
                }
                else if ($rootScope.url == '/app/part1_7') {
                    var expandUrl = 'templates/expand_pages/expand1_7.html'
                }
                else if ($rootScope.url == '/app/part1_8') {
                    var expandUrl = 'templates/expand_pages/expand1_8.html'
                }
                else if ($rootScope.url == '/app/part1_9') {
                    var expandUrl = 'templates/expand_pages/expand1_9.html'
                }
                else if ($rootScope.url == '/app/part1_10') {
                    var expandUrl = 'templates/expand_pages/expand1_10.html'
                }
                else if ($rootScope.url == '/app/part1_11') {
                    var expandUrl = 'templates/expand_pages/expand1_11.html'
                }
                else if ($rootScope.url == '/app/part1_12') {
                    var expandUrl = 'templates/expand_pages/expand1_12.html'
                }
                else if ($rootScope.url == '/app/part1_13') {
                    var expandUrl = 'templates/expand_pages/expand1_13.html'
                }
                else if ($rootScope.url == '/app/part2_14') {
                    var expandUrl = 'templates/expand_pages/expand2_14.html'
                }
                else if ($rootScope.url == '/app/part3_15') {
                    var expandUrl = 'templates/expand_pages/expand3_15.html'
                }
                else if ($rootScope.url == '/app/part3_16') {
                    var expandUrl = 'templates/expand_pages/expand3_16.html'
                }
                else if ($rootScope.url == '/app/part3_17') {
                    var expandUrl = 'templates/expand_pages/expand3_17.html'
                }
                else if ($rootScope.url == '/app/part3_18') {
                    var expandUrl = 'templates/expand_pages/expand3_18.html'
                }
                else if ($rootScope.url == '/app/part3_19') {
                    var expandUrl = 'templates/expand_pages/expand3_19.html'
                }
                else if ($rootScope.url == '/app/part3_20') {
                    var expandUrl = 'templates/expand_pages/expand3_20.html'
                }
                else if ($rootScope.url == '/app/part4_21') {
                    var expandUrl = 'templates/expand_pages/expand4_21.html'
                }
                else if ($rootScope.url == '/app/part4_22') {
                    var expandUrl = 'templates/expand_pages/expand4_22.html'
                }
                else if ($rootScope.url == '/app/part4_23') {
                    var expandUrl = 'templates/expand_pages/expand4_23.html'
                }
                else if ($rootScope.url == '/app/part4_24') {
                    var expandUrl = 'templates/expand_pages/expand4_24.html'
                }
                else if ($rootScope.url == '/app/part4_25') {
                    var expandUrl = 'templates/expand_pages/expand4_25.html'
                }
                else if ($rootScope.url == '/app/part4_26') {
                    var expandUrl = 'templates/expand_pages/expand4_26.html'
                }
                else if ($rootScope.url == '/app/part4_27') {
                    var expandUrl = 'templates/expand_pages/expand4_27.html'
                }
                else if ($rootScope.url == '/app/part4_28') {
                    var expandUrl = 'templates/expand_pages/expand4_28.html'
                }
                else if ($rootScope.url == '/app/part4_29') {
                    var expandUrl = 'templates/expand_pages/expand4_29.html'
                }
                else if ($rootScope.url == '/app/part4_30') {
                    var expandUrl = 'templates/expand_pages/expand4_30.html'
                }
                else if ($rootScope.url == '/app/part4_31') {
                    var expandUrl = 'templates/expand_pages/expand4_31.html'
                }
                else if ($rootScope.url == '/app/part4_32') {
                    var expandUrl = 'templates/expand_pages/expand4_32.html'
                }
                else if ($rootScope.url == '/app/part4_33') {
                    var expandUrl = 'templates/expand_pages/expand4_33.html'
                }
                else if ($rootScope.url == '/app/part4_34') {
                    var expandUrl = 'templates/expand_pages/expand4_34.html'
                }
                else if ($rootScope.url == '/app/part4_35') {
                    var expandUrl = 'templates/expand_pages/expand4_35.html'
                }
                else if ($rootScope.url == '/app/part4_36') {
                    var expandUrl = 'templates/expand_pages/expand4_36.html'
                }
                else if ($rootScope.url == '/app/part5_37') {
                    var expandUrl = 'templates/expand_pages/expand5_37.html'
                }
                else if ($rootScope.url == '/app/part5_38') {
                    var expandUrl = 'templates/expand_pages/expand5_38.html'
                }
                else if ($rootScope.url == '/app/part5_39') {
                    var expandUrl = 'templates/expand_pages/expand5_39.html'
                }
                else if ($rootScope.url == '/app/part5_40') {
                    var expandUrl = 'templates/expand_pages/expand5_40.html'
                }
                else if ($rootScope.url == '/app/part5_41') {
                    var expandUrl = 'templates/expand_pages/expand5_41.html'
                }
                else if ($rootScope.url == '/app/part5_42') {
                    var expandUrl = 'templates/expand_pages/expand5_42.html'
                }
                else if ($rootScope.url == '/app/part5_43') {
                    var expandUrl = 'templates/expand_pages/expand5_43.html'
                }
                else if ($rootScope.url == '/app/part5_44') {
                    var expandUrl = 'templates/expand_pages/expand5_44.html'
                }
                else if ($rootScope.url == '/app/part5_45') {
                    var expandUrl = 'templates/expand_pages/expand5_45.html'
                }
                else if ($rootScope.url == '/app/part5_46') {
                    var expandUrl = 'templates/expand_pages/expand5_46.html'
                }
                else if ($rootScope.url == '/app/part5_47') {
                    var expandUrl = 'templates/expand_pages/expand5_47.html'
                }
                else if ($rootScope.url == '/app/part5_48') {
                    var expandUrl = 'templates/expand_pages/expand5_48.html'
                }
                else if ($rootScope.url == '/app/part5_49') {
                    var expandUrl = 'templates/expand_pages/expand5_49.html'
                }
                else if ($rootScope.url == '/app/part5_50') {
                    var expandUrl = 'templates/expand_pages/expand5_50.html'
                }
                else if ($rootScope.url == '/app/part5_51') {
                    var expandUrl = 'templates/expand_pages/expand5_51.html'
                }
                else if ($rootScope.url == '/app/part5_52') {
                    var expandUrl = 'templates/expand_pages/expand5_52.html'
                }
                else if ($rootScope.url == '/app/part5_53') {
                    var expandUrl = 'templates/expand_pages/expand5_53.html'
                }
                else if ($rootScope.url == '/app/part5_54') {
                    var expandUrl = 'templates/expand_pages/expand5_54.html'
                }
                else if ($rootScope.url == '/app/part5_55') {
                    var expandUrl = 'templates/expand_pages/expand5_55.html'
                }
                else if ($rootScope.url == '/app/part5_56') {
                    var expandUrl = 'templates/expand_pages/expand5_56.html'
                }
                else if ($rootScope.url == '/app/part5_57') {
                    var expandUrl = 'templates/expand_pages/expand5_57.html'
                }
                else if ($rootScope.url == '/app/part5_58') {
                    var expandUrl = 'templates/expand_pages/expand5_58.html'
                }
                else if ($rootScope.url == '/app/part5_59') {
                    var expandUrl = 'templates/expand_pages/expand5_59.html'
                }
                else if ($rootScope.url == '/app/part5_60') {
                    var expandUrl = 'templates/expand_pages/expand5_60.html'
                }
                else if ($rootScope.url == '/app/part5_61') {
                    var expandUrl = 'templates/expand_pages/expand5_61.html'
                }
                else if ($rootScope.url == '/app/part5_62') {
                    var expandUrl = 'templates/expand_pages/expand5_62.html'
                }
                else if ($rootScope.url == '/app/part5_63') {
                    var expandUrl = 'templates/expand_pages/expand5_63.html'
                }
                else if ($rootScope.url == '/app/part5_64') {
                    var expandUrl = 'templates/expand_pages/expand5_64.html'
                }
                else if ($rootScope.url == '/app/part5_65') {
                    var expandUrl = 'templates/expand_pages/expand5_65.html'
                }
                else if ($rootScope.url == '/app/part5_65b') {
                    var expandUrl = 'templates/expand_pages/expand5_65b.html'
                }
                else if ($rootScope.url == '/app/part5_65c') {
                    var expandUrl = 'templates/expand_pages/expand5_65c.html'
                }
                else if ($rootScope.url == '/app/part5_65d') {
                    var expandUrl = 'templates/expand_pages/expand5_65d.html'
                }
                else if ($rootScope.url == '/app/part5_65e') {
                    var expandUrl = 'templates/expand_pages/expand5_65e.html'
                }
                else if ($rootScope.url == '/app/part5_65f') {
                    var expandUrl = 'templates/expand_pages/expand5_65f.html'
                }
                else if ($rootScope.url == '/app/part5_65g') {
                    var expandUrl = 'templates/expand_pages/expand5_65g.html'
                }
                else if ($rootScope.url == '/app/part5_66') {
                    var expandUrl = 'templates/expand_pages/expand5_66.html'
                }
                else if ($rootScope.url == '/app/part5_67') {
                    var expandUrl = 'templates/expand_pages/expand5_67.html'
                }
                else if ($rootScope.url == '/app/part5_68') {
                    var expandUrl = 'templates/expand_pages/expand5_68.html'
                }
                else if ($rootScope.url == '/app/part5_69') {
                    var expandUrl = 'templates/expand_pages/expand5_69.html'
                }
                else if ($rootScope.url == '/app/part5_70') {
                    var expandUrl = 'templates/expand_pages/expand5_70.html'
                }
                else if ($rootScope.url == '/app/part5_71') {
                    var expandUrl = 'templates/expand_pages/expand5_71.html'
                }
                else if ($rootScope.url == '/app/part5_72') {
                    var expandUrl = 'templates/expand_pages/expand5_72.html'
                }
                else if ($rootScope.url == '/app/part5_73') {
                    var expandUrl = 'templates/expand_pages/expand5_73.html'
                }
                else if ($rootScope.url == '/app/part5_74') {
                    var expandUrl = 'templates/expand_pages/expand5_74.html'
                }
                else if ($rootScope.url == '/app/part5_74b') {
                    var expandUrl = 'templates/expand_pages/expand5_74b.html'
                }
                else if ($rootScope.url == '/app/part5_74c') {
                    var expandUrl = 'templates/expand_pages/expand5_74c.html'
                }
                else if ($rootScope.url == '/app/part5_75') {
                    var expandUrl = 'templates/expand_pages/expand5_75.html'
                }
                else if ($rootScope.url == '/app/part6_76') {
                    var expandUrl = 'templates/expand_pages/expand6_76.html'
                }
                else if ($rootScope.url == '/app/part6_77') {
                    var expandUrl = 'templates/expand_pages/expand6_77.html'
                }
                else if ($rootScope.url == '/app/part6_78') {
                    var expandUrl = 'templates/expand_pages/expand6_78.html'
                }
                else if ($rootScope.url == '/app/part6_79') {
                    var expandUrl = 'templates/expand_pages/expand6_79.html'
                }
                else if ($rootScope.url == '/app/part6_80') {
                    var expandUrl = 'templates/expand_pages/expand6_80.html'
                }
                else if ($rootScope.url == '/app/part6_81') {
                    var expandUrl = 'templates/expand_pages/expand6_81.html'
                }
                else if ($rootScope.url == '/app/part6_81b') {
                    var expandUrl = 'templates/expand_pages/expand6_81b.html'
                }
                else if ($rootScope.url == '/app/part6_81c') {
                    var expandUrl = 'templates/expand_pages/expand6_81c.html'
                }
                else if ($rootScope.url == '/app/part6_81d') {
                    var expandUrl = 'templates/expand_pages/expand6_81d.html'
                }
                else if ($rootScope.url == '/app/part6_81e') {
                    var expandUrl = 'templates/expand_pages/expand6_81e.html'
                }
                else if ($rootScope.url == '/app/part6_82') {
                    var expandUrl = 'templates/expand_pages/expand6_82.html'
                }
                else if ($rootScope.url == '/app/part6_83') {
                    var expandUrl = 'templates/expand_pages/expand6_83.html'
                }
                else if ($rootScope.url == '/app/part6_84') {
                    var expandUrl = 'templates/expand_pages/expand6_84.html'
                }
                else if ($rootScope.url == '/app/part6_85') {
                    var expandUrl = 'templates/expand_pages/expand6_85.html'
                }
                else if ($rootScope.url == '/app/part6_86') {
                    var expandUrl = 'templates/expand_pages/expand6_86.html'
                }
                else if ($rootScope.url == '/app/part6_87') {
                    var expandUrl = 'templates/expand_pages/expand6_87.html'
                }
                else if ($rootScope.url == '/app/part6_88') {
                    var expandUrl = 'templates/expand_pages/expand6_88.html'
                }
                else if ($rootScope.url == '/app/part6_89') {
                    var expandUrl = 'templates/expand_pages/expand6_89.html'
                }
                else if ($rootScope.url == '/app/part6_90') {
                    var expandUrl = 'templates/expand_pages/expand6_90.html'
                }
                else if ($rootScope.url == '/app/part6_91') {
                    var expandUrl = 'templates/expand_pages/expand6_91.html'
                }
                else if ($rootScope.url == '/app/part6_92') {
                    var expandUrl = 'templates/expand_pages/expand6_92.html'
                }
                else if ($rootScope.url == '/app/part6_94') {
                    var expandUrl = 'templates/expand_pages/expand6_93.html'
                }
                else if ($rootScope.url == '/app/part6_94') {
                    var expandUrl = 'templates/expand_pages/expand6_94.html'
                }
                else if ($rootScope.url == '/app/part6_95') {
                    var expandUrl = 'templates/expand_pages/expand6_95.html'
                }
                else if ($rootScope.url == '/app/part6_96') {
                    var expandUrl = 'templates/expand_pages/expand6_96.html'
                }
                else if ($rootScope.url == '/app/part6_97') {
                    var expandUrl = 'templates/expand_pages/expand6_97.html'
                }
                else if ($rootScope.url == '/app/part6_98') {
                    var expandUrl = 'templates/expand_pages/expand6_98.html'
                }
                else if ($rootScope.url == '/app/part6_99') {
                    var expandUrl = 'templates/expand_pages/expand6_99.html'
                }
                else if ($rootScope.url == '/app/part6_100') {
                    var expandUrl = 'templates/expand_pages/expand6_100.html'
                }
                else if ($rootScope.url == '/app/part6_101') {
                    var expandUrl = 'templates/expand_pages/expand6_101.html'
                }
                else if ($rootScope.url == '/app/part6_102') {
                    var expandUrl = 'templates/expand_pages/expand6_102.html'
                }
                else if ($rootScope.url == '/app/part6_103') {
                    var expandUrl = 'templates/expand_pages/expand6_103.html'
                }
                else if ($rootScope.url == '/app/part6_103b') {
                    var expandUrl = 'templates/expand_pages/expand6_103b.html'
                }
                else if ($rootScope.url == '/app/part6_103c') {
                    var expandUrl = 'templates/expand_pages/expand6_103c.html'
                }
                else if ($rootScope.url == '/app/part6_103d') {
                    var expandUrl = 'templates/expand_pages/expand6_103d.html'
                }
                else if ($rootScope.url == '/app/part6_103e') {
                    var expandUrl = 'templates/expand_pages/expand6_103e.html'
                }
                else if ($rootScope.url == '/app/part6_103f') {
                    var expandUrl = 'templates/expand_pages/expand6_103f.html'
                }
                else if ($rootScope.url == '/app/part6_103g') {
                    var expandUrl = 'templates/expand_pages/expand6_103g.html'
                }
                else if ($rootScope.url == '/app/part6_104') {
                    var expandUrl = 'templates/expand_pages/expand6_104.html'
                }
                else if ($rootScope.url == '/app/part6_105') {
                    var expandUrl = 'templates/expand_pages/expand6_105.html'
                }
                else if ($rootScope.url == '/app/part6_106') {
                    var expandUrl = 'templates/expand_pages/expand6_106.html'
                }
                else if ($rootScope.url == '/app/part6_107') {
                    var expandUrl = 'templates/expand_pages/expand6_107.html'
                }
                else if ($rootScope.url == '/app/part6_108') {
                    var expandUrl = 'templates/expand_pages/expand6_108.html'
                }
                else if ($rootScope.url == '/app/part6_109') {
                    var expandUrl = 'templates/expand_pages/expand6_109.html'
                }
                else if ($rootScope.url == '/app/part6_110') {
                    var expandUrl = 'templates/expand_pages/expand6_110.html'
                }
                else if ($rootScope.url == '/app/part6_111') {
                    var expandUrl = 'templates/expand_pages/expand6_111.html'
                }
                else if ($rootScope.url == '/app/part6_112') {
                    var expandUrl = 'templates/expand_pages/expand6_112.html'
                }
                else if ($rootScope.url == '/app/part6_113') {
                    var expandUrl = 'templates/expand_pages/expand6_113.html'
                }
                else if ($rootScope.url == '/app/part6_114') {
                    var expandUrl = 'templates/expand_pages/expand6_114.html'
                }
                else if ($rootScope.url == '/app/part7_115') {
                    var expandUrl = 'templates/expand_pages/expand7_115.html'
                }
                else if ($rootScope.url == '/app/part7_116') {
                    var expandUrl = 'templates/expand_pages/expand7_116.html'
                }
                else if ($rootScope.url == '/app/part7_117') {
                    var expandUrl = 'templates/expand_pages/expand7_117.html'
                }
                else if ($rootScope.url == '/app/part7_118') {
                    var expandUrl = 'templates/expand_pages/expand7_118.html'
                }
                else if ($rootScope.url == '/app/part7_119') {
                    var expandUrl = 'templates/expand_pages/expand7_119.html'
                }
                else if ($rootScope.url == '/app/part7_119b') {
                    var expandUrl = 'templates/expand_pages/expand7_119b.html'
                }
                else if ($rootScope.url == '/app/part7_119c') {
                    var expandUrl = 'templates/expand_pages/expand7_119c.html'
                }
                else if ($rootScope.url == '/app/part7_119d') {
                    var expandUrl = 'templates/expand_pages/expand7_119d.html'
                }
                else if ($rootScope.url == '/app/part7_120') {
                    var expandUrl = 'templates/expand_pages/expand7_120.html'
                }
                else if ($rootScope.url == '/app/part7_120b') {
                    var expandUrl = 'templates/expand_pages/expand7_120b.html'
                }
                else if ($rootScope.url == '/app/part7_120c') {
                    var expandUrl = 'templates/expand_pages/expand7_120c.html'
                }
                else if ($rootScope.url == '/app/part7_120d') {
                    var expandUrl = 'templates/expand_pages/expand7_120d.html'
                }
                else if ($rootScope.url == '/app/part7_121') {
                    var expandUrl = 'templates/expand_pages/expand7_121.html'
                }
                else if ($rootScope.url == '/app/part7_122') {
                    var expandUrl = 'templates/expand_pages/expand7_122.html'
                }
                else if ($rootScope.url == '/app/part7_123') {
                    var expandUrl = 'templates/expand_pages/expand7_123.html'
                }
                else if ($rootScope.url == '/app/part7_124') {
                    var expandUrl = 'templates/expand_pages/expand7_124.html'
                }
                else if ($rootScope.url == '/app/part7_125') {
                    var expandUrl = 'templates/expand_pages/expand7_125.html'
                }
                else if ($rootScope.url == '/app/part7_126') {
                    var expandUrl = 'templates/expand_pages/expand7_126.html'
                }
                else if ($rootScope.url == '/app/part7_127') {
                    var expandUrl = 'templates/expand_pages/expand7_127.html'
                }
                else if ($rootScope.url == '/app/part7_128') {
                    var expandUrl = 'templates/expand_pages/expand7_128.html'
                }
                else if ($rootScope.url == '/app/part7_129') {
                    var expandUrl = 'templates/expand_pages/expand7_129.html'
                }
                else if ($rootScope.url == '/app/part7_130') {
                    var expandUrl = 'templates/expand_pages/expand7_130.html'
                }
                else if ($rootScope.url == '/app/part7_131') {
                    var expandUrl = 'templates/expand_pages/expand7_131.html'
                }
                else if ($rootScope.url == '/app/part7_132') {
                    var expandUrl = 'templates/expand_pages/expand7_132.html'
                }
                else if ($rootScope.url == '/app/part7_133') {
                    var expandUrl = 'templates/expand_pages/expand7_133.html'
                }
                else if ($rootScope.url == '/app/part7_134') {
                    var expandUrl = 'templates/expand_pages/expand7_134.html'
                }
                else if ($rootScope.url == '/app/part7_135') {
                    var expandUrl = 'templates/expand_pages/expand7_135.html'
                }
                else if ($rootScope.url == '/app/part7_136') {
                    var expandUrl = 'templates/expand_pages/expand7_136.html'
                }
                else if ($rootScope.url == '/app/part7_137') {
                    var expandUrl = 'templates/expand_pages/expand7_137.html'
                }
                else if ($rootScope.url == '/app/part7_138') {
                    var expandUrl = 'templates/expand_pages/expand7_138.html'
                }
                else if ($rootScope.url == '/app/part7_139') {
                    var expandUrl = 'templates/expand_pages/expand7_139.html'
                }
                else if ($rootScope.url == '/app/part7_140') {
                    var expandUrl = 'templates/expand_pages/expand7_140.html'
                }
                else if ($rootScope.url == '/app/part7_141') {
                    var expandUrl = 'templates/expand_pages/expand7_141.html'
                }
                else if ($rootScope.url == '/app/part7_142') {
                    var expandUrl = 'templates/expand_pages/expand7_142.html'
                }
                else if ($rootScope.url == '/app/part7_143') {
                    var expandUrl = 'templates/expand_pages/expand7_143.html'
                }
                else if ($rootScope.url == '/app/part7_144') {
                    var expandUrl = 'templates/expand_pages/expand7_144.html'
                }
                else if ($rootScope.url == '/app/part7_144b') {
                    var expandUrl = 'templates/expand_pages/expand7_144b.html'
                }
                else if ($rootScope.url == '/app/part7_144c') {
                    var expandUrl = 'templates/expand_pages/expand7_144c.html'
                }
                else if ($rootScope.url == '/app/part7_144d') {
                    var expandUrl = 'templates/expand_pages/expand7_144d.html'
                }
                else if ($rootScope.url == '/app/part8_145') {
                    var expandUrl = 'templates/expand_pages/expand8_145.html'
                }
                else if ($rootScope.url == '/app/part8_146') {
                    var expandUrl = 'templates/expand_pages/expand8_146.html'
                }
                else if ($rootScope.url == '/app/part8_147') {
                    var expandUrl = 'templates/expand_pages/expand8_147.html'
                }
                else if ($rootScope.url == '/app/part8_148') {
                    var expandUrl = 'templates/expand_pages/expand8_148.html'
                }
                else if ($rootScope.url == '/app/part8_149') {
                    var expandUrl = 'templates/expand_pages/expand8_149.html'
                }
                else if ($rootScope.url == '/app/part8_150') {
                    var expandUrl = 'templates/expand_pages/expand8_150.html'
                }
                else if ($rootScope.url == '/app/part8_151') {
                    var expandUrl = 'templates/expand_pages/expand8_151.html'
                }
                else if ($rootScope.url == '/app/part8_152') {
                    var expandUrl = 'templates/expand_pages/expand8_152.html'
                }
                else if ($rootScope.url == '/app/part8_153') {
                    var expandUrl = 'templates/expand_pages/expand8_153.html'
                }
                else if ($rootScope.url == '/app/part8_154') {
                    var expandUrl = 'templates/expand_pages/expand8_154.html'
                }
                else if ($rootScope.url == '/app/part8_155') {
                    var expandUrl = 'templates/expand_pages/expand8_155.html'
                }
                else if ($rootScope.url == '/app/part8_156') {
                    var expandUrl = 'templates/expand_pages/expand8_156.html'
                }

                if (expandUrl != '') {
                    $scope.popup1 = $ionicPopup.alert({
                        title: 'CLOSE WINDOW',
                        templateUrl: expandUrl,
                        scope: $scope,
                        buttons: [
                            {
                                type: 'button button-full button-stable bottom-link',
                                text: 'Ok',
                                onTap: function (e) {
                                    $scope.popup1.close();
                                }
                            }
                        ]
                    });
                }
            }
        })

.controller('CommonCtrl', function ($scope, $http, $ionicLoading, $ionicPopup) {
            $scope.$on('$ionicView.beforeEnter', function (e, config) {
                config.enableBack = false;
            });


            //$scope.tell = {};
            //$scope.tellFriend = function () {

            //    $scope.successMsg = null;
            //    $ionicLoading.show({
            //        template: spinner_android
            //    });
            //    var subject = $scope.tell.name + ' has sent you an message through The Story Of Jesus Website';

            //    $http({
            //        url: base_url + 'index.php',
            //        method: "GET",
            //        params: {from: $scope.tell.yourEmail, subject: subject, message: $scope.tell.message, to: $scope.tell.friendEmail, name: $scope.tell.name},
            //    }).then(
            //            function (response, status) {
            //                $ionicLoading.hide();
            //                $scope.tell = {};
            //                $scope.resultMessageSuccess = 'Message sent.';
            //            },
            //            function (error) {
            //                $ionicLoading.hide();
            //                $scope.tell = {};
            //                $scope.resultMessageError = 'Error in sending message, please try again';
            //            }
            //    )
            //}

           
            //$scope.contact = {};
            //$scope.contactUs = function () {

            //    $ionicLoading.show({
            //        template: spinner_android
            //    });
            //    var subject = $scope.contact.name + ' wants to contact you';
            //    var to = 'info@rockislandbooks.com';
            //    $http({
            //        url: base_url + 'index.php',
            //        method: "GET",
            //        params: {from: $scope.contact.yourEmail, subject: subject, message: $scope.contact.message, to: to, name: $scope.contact.name},
            //    }).then(
            //            function (response, status) {
            //                $scope.contact = {};
            //                $ionicLoading.hide();
            //                $scope.resultMessageSuccess = 'Message sent.';
            //            },
            //            function (error) {
            //                $scope.contact = {};
            //                $ionicLoading.hide();
            //                $scope.resultMessageError = 'Error in sending message, please try again';
            //            }
            //    );
            //}
            $scope.updateEditor = function () {
                var id = document.getElementsByTagName('textarea')[0].getAttribute('id');
                var element = document.getElementById(id);
                element.style.height = element.scrollHeight + "px";
            };

            $scope.commentryPopup = function () {

            };

            $scope.popup = function (page) {
                var url = '';
                if (page == 'abel') {
                    url = 'templates/popup_pages/abel.html'
                }
                else if (page == 'abraham') {
                    url = 'templates/popup_pages/abraham.html'
                }
                else if (page == 'angel') {
                    url = 'templates/popup_pages/angel.html'
                }
                else if (page == 'anointfeet') {
                    url = 'templates/popup_pages/anointfeet.html'
                }
                else if (page == 'apostles') {
                    url = 'templates/popup_pages/apostles.html'
                }               /* ********* disciples ************/
                else if (page == 'baptizing') {
                    url = 'templates/popup_pages/baptizing.html'
                }
                else if (page == 'bed') {
                    url = 'templates/popup_pages/bed.html'
                }
                else if (page == 'bethlehem') {
                    url = 'templates/popup_pages/bethlehem.html'
                }
                else if (page == 'blasphemies') {
                    url = 'templates/popup_pages/blasphemies.html'
                }
                else if (page == 'brimstone') {
                    url = 'templates/popup_pages/brimstone.html'
                }
                else if (page == 'caiaphas') {
                    url = 'templates/popup_pages/caiaphas.html'
                }
                else if (page == 'canaanite') {
                    url = 'templates/popup_pages/canaanite.html'
                }
                else if (page == 'centurion') {
                    url = 'templates/popup_pages/centurion.html'
                }
                else if (page == 'christ') {
                    url = 'templates/popup_pages/christ.html'
                }
                else if (page == 'circumcise') {
                    url = 'templates/popup_pages/circumcise.html'
                }
                else if (page == 'commandments') {
                    url = 'templates/popup_pages/commandments.html'
                }
                else if (page == 'cross') {
                    url = 'templates/popup_pages/cross.html'
                }
                else if (page == 'crucified') {
                    url = 'templates/popup_pages/crucified.html'
                }
                else if (page == 'david') {
                    url = 'templates/popup_pages/david.html'
                }                     /* ********* Solomon ************/
                else if (page == 'demon') {
                    url = 'templates/popup_pages/demon.html'
                }
                else if (page == 'dove') {
                    url = 'templates/popup_pages/dove.html'
                }
                else if (page == 'dropsy') {
                    url = 'templates/popup_pages/dropsy.html'
                }
                else if (page == 'elijah') {
                    url = 'templates/popup_pages/elijah.html'
                }
                else if (page == 'eternal') {
                    url = 'templates/popup_pages/eternal.html'
                }
                else if (page == 'eunuch') {
                    url = 'templates/popup_pages/eunuch.html'
                }
                else if (page == 'fasting') {
                    url = 'templates/popup_pages/fasting.html'
                }
                else if (page == 'feast') {
                    url = 'templates/popup_pages/feast.html'
                }
                else if (page == 'gabriel') {
                    url = 'templates/popup_pages/gabriel.html'
                }
                else if (page == 'galilee') {
                    url = 'templates/popup_pages/galilee.html'
                }
                else if (page == 'gentiles') {
                    url = 'templates/popup_pages/gentiles.html'
                }
                else if (page == 'gospel') {
                    url = 'templates/popup_pages/gospel.html'
                }
                else if (page == 'greek') {
                    url = 'templates/popup_pages/greek.html'
                }
                else if (page == 'hell') {
                    url = 'templates/popup_pages/hell.html'
                }
                else if (page == 'herod') {
                    url = 'templates/popup_pages/herod.html'
                }
                else if (page == 'holyspirit') {
                    url = 'templates/popup_pages/holyspirit.html'
                }
                else if (page == 'isaiah') {
                    url = 'templates/popup_pages/isaiah.html'
                }
                else if (page == 'jacob') {
                    url = 'templates/popup_pages/jacob.html'
                }
                else if (page == 'jeremiah') {
                    url = 'templates/popup_pages/jeremiah.html'
                }
                else if (page == 'jerusalem') {
                    url = 'templates/popup_pages/jerusalem.html'
                }
                else if (page == 'jonah') {
                    url = 'templates/popup_pages/jonah.html'
                }
                else if (page == 'judea') {
                    url = 'templates/popup_pages/judea.html'
                }
                else if (page == 'lawsofmoses') {
                    url = 'templates/popup_pages/lawsofmoses.html'
                }         /* ********* Moses ************/
                else if (page == 'lawyers') {
                    url = 'templates/popup_pages/lawyers.html'
                }                 /* ********* Doctors of the law ************/
                else if (page == 'leprosy') {
                    url = 'templates/popup_pages/leprosy.html'
                }
                else if (page == 'levite') {
                    url = 'templates/popup_pages/levite.html'
                }
                else if (page == 'lot') {
                    url = 'templates/popup_pages/lot.html'
                }

                else if (page == 'bethany') {
                    url = 'templates/popup_pages/mapbethany.html'
                }
                else if (page == 'bethsaida') {
                    url = 'templates/popup_pages/mapbethsaida.html'
                }
                else if (page == 'mapcaesarea') {
                    url = 'templates/popup_pages/mapcaesarea.html'
                }
                else if (page == 'cana') {
                    url = 'templates/popup_pages/mapcana.html'
                }
                else if (page == 'capernaum') {
                    url = 'templates/popup_pages/mapcapernaum.html'
                }
                else if (page == 'chorazin') {
                    url = 'templates/popup_pages/mapchorazin.html'
                }
                else if (page == 'dacapolis') {
                    url = 'templates/popup_pages/mapdacapolis.html'
                }
                else if (page == 'egypt') {
                    url = 'templates/popup_pages/mapegypt.html'
                }
                else if (page == 'mapgadara') {
                    url = 'templates/popup_pages/mapgadara.html'
                }
                else if (page == 'gennesaret') {
                    url = 'templates/popup_pages/mapgennesaret.html'
                }
                else if (page == 'idumea') {
                    url = 'templates/popup_pages/mapidumea.html'
                }
                else if (page == 'jericho') {
                    url = 'templates/popup_pages/mapjericho.html'
                }
                else if (page == 'jordan') {
                    url = 'templates/popup_pages/mapjordanriver.html'
                }
                else if (page == 'nain') {
                    url = 'templates/popup_pages/mapnain.html'
                }
                else if (page == 'phoenicia') {
                    url = 'templates/popup_pages/mapphoenicia.html'
                }
                else if (page == 'samaira') {
                    url = 'templates/popup_pages/mapsamaira.html'
                }
                else if (page == 'seaofgalilee') {
                    url = 'templates/popup_pages/mapseagalilee.html'
                }
                else if (page == 'sychar') {
                    url = 'templates/popup_pages/mapsychar.html'
                }
                else if (page == 'tyre') {
                    url = 'templates/popup_pages/maptyre.html'
                }
                else if (page == 'messiah') {
                    url = 'templates/popup_pages/messiah.html'
                }
                else if (page == 'moneychargers') {
                    url = 'templates/popup_pages/moneychargers.html'
                }
                else if (page == 'nazareth') {
                    url = 'templates/popup_pages/nazareth.html'
                }
                else if (page == 'nineveh') {
                    url = 'templates/popup_pages/nineveh.html'
                }
                else if (page == 'noah') {
                    url = 'templates/popup_pages/noah.html'
                }
                else if (page == 'officerspharisees') {
                    url = 'templates/popup_pages/officerspharisees.html'
                }
                else if (page == 'parable') {
                    url = 'templates/popup_pages/parable.html'
                }
                else if (page == 'passover') {
                    url = 'templates/popup_pages/passover.html'
                }
                else if (page == 'perfumedoil') {
                    url = 'templates/popup_pages/perfumedoil.html'
                }
                else if (page == 'pharisees') {
                    url = 'templates/popup_pages/pharisees.html'
                }
                else if (page == 'pilate') {
                    url = 'templates/popup_pages/pilate.html'
                }
                else if (page == 'plague') {
                    url = 'templates/popup_pages/plague.html'
                }
                else if (page == 'pool') {
                    url = 'templates/popup_pages/pools.html'
                }
                else if (page == 'praetorium') {
                    url = 'templates/popup_pages/praetorium.html'
                }
                else if (page == 'priest') {
                    url = 'templates/popup_pages/priest.html'
                }
                else if (page == 'prophesied') {
                    url = 'templates/popup_pages/prophesied.html'
                }           /* ********* Prophet ************/
                else if (page == 'psalm') {
                    url = 'templates/popup_pages/psalm.html'
                }
                else if (page == 'rebirth') {
                    url = 'templates/popup_pages/rebirth.html'
                }
                else if (page == 'remission') {
                    url = 'templates/popup_pages/remission.html'
                }
                else if (page == 'repent') {
                    url = 'templates/popup_pages/repent.html'
                }
                else if (page == 'rome') {
                    url = 'templates/popup_pages/rome.html'
                }
                else if (page == 'sabbath') {
                    url = 'templates/popup_pages/sabbath.html'
                }
                else if (page == 'sackcloth') {
                    url = 'templates/popup_pages/sackcloth.html'
                }
                else if (page == 'sacrifices') {
                    url = 'templates/popup_pages/sacrifices.html'
                }           /* ********* Lamb Of God ************/
                else if (page == 'sadducees') {
                    url = 'templates/popup_pages/sadducees.html'
                }
                else if (page == 'satan') {
                    url = 'templates/popup_pages/satan.html'
                }                     /* ********* Devil ************/
                else if (page == 'scourged') {
                    url = 'templates/popup_pages/scourged.html'
                }
                else if (page == 'scribes') {
                    url = 'templates/popup_pages/scribes.html'
                }
                else if (page == 'scripture') {
                    url = 'templates/popup_pages/scriptures.html'
                }
                else if (page == 'sodom') {
                    url = 'templates/popup_pages/sodom.html'
                }
                else if (page == 'synagogues') {
                    url = 'templates/popup_pages/synagogues.html'
                }
                else if (page == 'talents') {
                    url = 'templates/popup_pages/talents.html'
                }
                else if (page == 'tax') {
                    url = 'templates/popup_pages/tax.html'
                }
                else if (page == 'teacher') {
                    url = 'templates/popup_pages/teacher.html'
                }
                else if (page == 'temple') {
                    url = 'templates/popup_pages/temple.html'
                }
                else if (page == 'tithes') {
                    url = 'templates/popup_pages/tithes.html'
                }
                else if (page == 'tiberius') {
                    url = 'templates/popup_pages/tiberius.html'
                }               /* ********* Tiberius Caesar ************/ else if (page == 'tormenetors') {
                    url = 'templates/popup_pages/tormenetors.html'
                }
                else if (page == 'traditionelders') {
                    url = 'templates/popup_pages/traditionelders.html'
                }
                else if (page == 'veil') {
                    url = 'templates/popup_pages/veil.html'
                }
                else if (page == 'vinegar') {
                    url = 'templates/popup_pages/vinegar.html'
                }
                else if (page == 'yeast') {
                    url = 'templates/popup_pages/yeast.html'
                }
                else if (page == 'mountofolives') {
                    url = 'templates/popup_pages/mountofolives.html'
                }
                else if (page == 'stoning') {
                    url = 'templates/popup_pages/stoning.html'
                }
                else if (page == 'sanctified') {
                    url = 'templates/popup_pages/sanctified.html'
                }
                else if (page == 'legs') {
                    url = 'templates/popup_pages/legs.html'
                }
                else if (page == 'spices') {
                    url = 'templates/popup_pages/spices.html'
                }

                $scope.popup1 = $ionicPopup.alert({
                    title: 'CLOSE WINDOW',
                    templateUrl: url,
                    scope: $scope,
                    buttons: [
                        {
                            type: 'button button-full button-stable bottom-link',
                            text: 'Ok',
                            onTap: function (e) {
                                $scope.popup1.close();
                            }
                        }
                    ]
                });
            }

})

.controller('SendMessageCtrl', function ($scope, $http, $ionicLoading, $ionicHistory, $timeout, $state) {

    $scope.btnClick = function () {

        var body = document.getElementById("msg").value;
        var namefrom = document.getElementById("namefrom").value;
        var mailfrom = document.getElementById("mailfrom").value;
        if (body == "" && namefrom == "" && mailfrom == "") {
            $ionicLoading.show({
                template: 'Please, complete this form!', noBackdrop: true, duration: 1000
            });

            return;
        }

        try {
            var soapRequest =
                '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><sendMail xmlns="http://tempuri.org/">' +
                '<sSvcName>TSOJ</sSvcName>' +
                '<sCode>$erv1cePwd</sCode>' +
                '<sToAddress>' + MAIL_TO + '</sToAddress>' +
                '<sSubject>' + MAIL_SUBJ_NEW + '</sSubject>' +
                '<sMessage>Name: ' + namefrom + '&lt;br&gt;' +
                'Email: ' + mailfrom + '&lt;br&gt;' +
                'Message: ' + body + '</sMessage>' +
                '</sendMail></s:Body></s:Envelope>';

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('POST', MAIL_wsUrl, true);

            xmlhttp.setRequestHeader("Content-Type", "text/xml;charset=UTF-8");
            xmlhttp.setRequestHeader('SOAPAction', MAIL_wsAction);

            xmlhttp.send('<?xml version="1.0" encoding="utf-8" ?>' + soapRequest);
            xmlhttp.onreadystatechange = function () {

                if (!xmlhttp.status || xmlhttp.status == 200) {
                    $ionicLoading.show({
                        template: 'Your message has been sent!', noBackdrop: true, duration: 1000
                    });

                } else {
                    $ionicLoading.show({
                        template: 'Your message has not been sent!', noBackdrop: true, duration: 1000
                    });
                }

                $timeout(function () {
                    //$ionicHistory.goBack(-1);
                    $state.go('app.home');
                }, 1000);
            };
        } catch (e) {
            //$ionicHistory.goBack(-1);
            $state.go('app.home');
        }
    };
});