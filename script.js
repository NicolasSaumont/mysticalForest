jQuery(document).ready(function () {

        //CHANGEMENT DE PAGE//
        $('.next_button').click(function (e) {
                var id = $(this).parent().parent().attr('id');
                var step = id.substring(4);
                var step = parseInt(step);
                var nextStep = step + 1;
        

                $("p").fadeOut(300,"swing");
                setTimeout(function() {
                        $('#page' + step).removeClass('active');
                        $('#page' + nextStep).addClass('active');
                        $('#page' + nextStep).show();
                }, 300);
                $("p").fadeIn(300,"swing");
        });

        //CHANGEMENT DE PAGE +2//
        $('.next_button.double').click(function (e) {
                var id = $(this).parent().parent().attr('id');
                var step = id.substring(4);
                var step = parseInt(step);
                var nextStep = step + 2;
        

                setTimeout(function() {
                        $('#page' + step).removeClass('active');
                        $('#page' + nextStep).addClass('active');
                }, 300);
        });

        //CHANGEMENT DE PAGE MEME SECTION//
        $('.same_section').click(function (e) {
                var currentId = $(this).parent().parent().attr('id');
                var currentId = currentId.substring(4);
                var idTarget = $(this).attr('id');
                var idTarget = idTarget.substring(4);

                $("p").fadeOut(300,"swing");
                setTimeout(function() {
                        $('#page' + currentId).removeClass('active');
                        $('#page' + idTarget).addClass('active');
                        $('#page' + idTarget).show();
                }, 300);
                $("p").fadeIn(300,"swing");
        });

        //CHANGEMENT DE SECTION SI SUITE DIRECTE
        $('.next_section').click(function (e) {
                var id = $(this).parent().parent().parent().attr('id');
                var section = id.substring(1);
                var section = parseInt(section);
                var nextSection = section + 1;

                $("#_" + section).fadeOut(300);
                setTimeout(function(){
                        $('#_' + nextSection).addClass('active');
                        $('#_' + nextSection).show();
                        $('#_' + section).removeClass('active');
                        $('#_' + section).hide();

                },300);
        });

        //CHANGEMENT DE SECTION SI SUITE LOINTAINE
        $('.other_section').click(function (e) {
                var idParent = $(this).parent().parent().parent().attr('id');
                var section = idParent.substring(1);
                var id = $(this).attr('id');
                var nextStep = id.substring(4);
                var nextId = $('#page' + nextStep).parent().attr('id');
                var nextSection = nextId.substring(1);

                $("#_" + section).fadeOut(300);
                setTimeout(function(){
                        $('#_' + nextSection).addClass('active');
                        $('#page' + nextStep).addClass('active');
                        $('#_' + nextSection).show();
                        $('#page' + nextStep).show();
                        $('#_' + section).removeClass('active');
                        $('#_' + section).hide();
                },300);
        });

        //CHOIX
        $('.choice').click(function (e) {
                var idParent = $(this).parent().parent().attr('id');
                var step = idParent.substring(4);
                var id = $(this).attr('id');
                var nextStep = id.substring(4);
                
                $(".bloc-text").fadeOut(300,"swing");
                $(".choices").fadeOut(300,"swing");
                setTimeout(function() {
                        $('#page' + step).removeClass('active');
                        $('#page' + nextStep).addClass('active');
                }, 300);
                $(".bloc-text").fadeIn(300,"swing");
                $(".choices").fadeIn(300,"swing");
        });

        //MORT
        $('.to_death').click(function (e) {
                var id = $(this).parent().parent().parent().attr('id');
                var section = id.substring(1);
                var section = parseInt(section);
                var nextSection = "death";
                var nextPage = "death";
                
                $("#_" + section).fadeOut(300);
                setTimeout(function(){
                        $(".death").addClass('active');
                        $('#_' + section).removeClass('active');
                },300);
        });

        //VICTORY DEMO
        $('.to_victory_demo').click(function (e) {
                var id = $(this).parent().parent().parent().attr('id');
                var section = id.substring(1);
                var section = parseInt(section);
                var nextSection = "demo-victory";
                var nextPage = "demo-victory";
                
                $("#_" + section).fadeOut(300);
                setTimeout(function(){
                        $(".demo-victory").addClass('active');
                        $('#_' + section).removeClass('active');
                },300);
        });

        //NOUVELLE PARTIE
        $('.retry').click(function (e) {
                location.reload();
        });

        //FIELD RIDDLE
        $('.fibonacci_riddle_response').click(function(e) {
                var input = document.getElementById("fibonacci_riddle").value;

                if (input === "21") {
                        $("#_11").fadeOut(300);
                        setTimeout(function(){
                                $("#page34").addClass('active');
                                $("#_12").addClass('active');
                                $('#page33').removeClass('active');
                                $('#_11').removeClass('active');
                        },300);
                } else {
                        $("p").fadeOut(300,"swing");
                        setTimeout(function(){
                                $("#page39").addClass('active');
                                $('#page33').removeClass('active');
                        },300);
                        $("p").fadeIn(300,"swing"); 
                };           
        });

        //ROOM 17 RIDDLE
        $('.room17_riddle_response').click(function(e) {
                var input = document.getElementById("room17_riddle").value;

                if (input === "d" || input === "D"){
                        setTimeout(function(){
                                $("#page506").addClass('active');
                                $('#page502').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page503").addClass('active');
                                $('#page502').removeClass('active');
                        },300);
                };           
        });

        //GOLLUM RIDDLE
        $('.gollum_riddle_response').click(function(e) {
                var input = document.getElementById("gollum_riddle").value;

                if (input === "Le vent" || input === "le vent"|| input === "vent" || input === "Vent"){
                        setTimeout(function(){
                                $("#page398").addClass('active');
                                $('#page395').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page396").addClass('active');
                                $('#page395').removeClass('active');
                        },300);
                };           
        });

        //SPHINX RIDDLE 1
        $('.sphinx_riddle1_response').click(function(e) {
                var input = document.getElementById("sphinx_riddle1").value;

                if (input === "9"){
                        setTimeout(function(){
                                $("#page478").addClass('active');
                                $('#page475').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page476").addClass('active');
                                $('#page475').removeClass('active');
                        },300);
                }; 
        });

        //SPHINX RIDDLE 2
        $('.sphinx_riddle2_response').click(function(e) {
                var input = document.getElementById("sphinx_riddle2").value;

                if (input === "1" || input === "une"|| input === "Une" || input === "une seule" || input === "Une seule"){
                        setTimeout(function(){
                                $("#page480").addClass('active');
                                $('#page479').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page476").addClass('active');
                                $('#page479').removeClass('active');
                        },300);
                };    
        });

        //SPHINX RIDDLE 3
        $('.sphinx_riddle3_response').click(function(e) {
                var input = document.getElementById("sphinx_riddle3").value;

                if (input === "le pied gauche" || input === "Le pied gauche"|| input === "pied gauche" || input === "Pied gauche"){
                        setTimeout(function(){
                                $("#page482").addClass('active');
                                $('#page481').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page476").addClass('active');
                                $('#page481').removeClass('active');
                        },300);
                };    
        });
        
        //CHAIR RIDDLE
        $('.chair_riddle_response').click(function(e) {
                var input = document.getElementById("chair_riddle").value;

                if (input === "chaise" || input === "Chaise"|| input === "Une chaise" || input === "une chaise"){
                        setTimeout(function(){
                                $("#page534").addClass('active');
                                $('#page524').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page525").addClass('active');
                                $('#page524').removeClass('active');
                        },300);
                };    
        });

        //POTION RIDDLE
        $('.potions_riddle_response').click(function(e) {
                var input = document.getElementById("potions_riddle").value;

                if (input === "3"){
                        setTimeout(function(){
                                $("#page553").addClass('active');
                                $('#page546').removeClass('active');
                        },300);
                } else if (input === "7"){
                        setTimeout(function(){
                                $("#page551").addClass('active');
                                $("#_111").addClass('active');
                                $('#page546').removeClass('active');
                                $('#_109').removeClass('active');
                        },300);
                } else if (input === "2" || input === "6"){
                        setTimeout(function(){
                                $("#page547").addClass('active');
                                $('#page546').removeClass('active');
                        },300);
                } else if (input === "1" || input === "4" || input === "5"){
                        setTimeout(function(){
                                $("#page548").addClass('active');
                                $("#_110").addClass('active');
                                $('#page546').removeClass('active');
                                $('#_109').removeClass('active');
                        },300);
                };    

        });

        //POTION RIDDLE 2
        $('.potions_riddle2_response').click(function(e) {
                var input = document.getElementById("potions_riddle2").value;

                if (input === "3"){
                        setTimeout(function(){
                                $("#page553").addClass('active');
                                $('#page547').removeClass('active');
                        },300);
                } else if (input === "7"){
                        setTimeout(function(){
                                $("#page551").addClass('active');
                                $("#_111").addClass('active');
                                $('#page547').removeClass('active');
                                $('#_109').removeClass('active');
                        },300);
                } else if (input === "2" || input === "6"){
                        setTimeout(function(){
                                $('#potions_riddle2').val('');
                        },300);
                } else if (input === "1" || input === "4" || input === "5"){
                        setTimeout(function(){
                                $("#page548").addClass('active');
                                $("#_110").addClass('active');
                                $('#page547').removeClass('active');
                                $('#_109').removeClass('active');
                        },300);
                };    
        });

        //FIRST WIZARD RIDDLE
        $('.first_sorcerer_riddle_response').click(function(e) {
                var input = document.getElementById("first_sorcerer_riddle").value;

                if (input === "3" || input === "3e"|| input === "3ème" || input === "3eme"){
                        setTimeout(function(){
                                $("#page573").addClass('active');
                                $('#page568').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page569").addClass('active');
                                $('#page568').removeClass('active');
                        },300);
                };    
        });

        //SECOND WIZARD RIDDLE
        $('.second_sorcerer_riddle_response').click(function(e) {
                var input = document.getElementById("second_sorcerer_riddle").value;

                if (input === "n" || input === "N"|| input === "le n" || input === "Le n" || input === "le N" || input === "Le N"){
                        setTimeout(function(){
                                $("#page582").addClass('active');
                                $('#page577').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page578").addClass('active');
                                $('#page577').removeClass('active');
                        },300);
                };    
        });

        //THIRD WIZARD RIDDLE
        $('.third_sorcerer_riddle_response').click(function(e) {
                var input = document.getElementById("third_sorcerer_riddle").value;

                if (input === "13112221"){
                        setTimeout(function(){
                                $("#page589").addClass('active');
                                $('#page584').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page585").addClass('active');
                                $('#page584').removeClass('active');
                        },300);
                };    
        });

        //FOURTH WIZARD RIDDLE
        $('.fourth_sorcerer_riddle_response').click(function(e) {
                var input = document.getElementById("fourth_sorcerer_riddle").value;

                if (input === "le soleil" || input === "Le soleil"|| input === "le Soleil" || input === "Le Soleil" || input === "soleil" || input === "Soleil"){
                        setTimeout(function(){
                                $("#page596").addClass('active');
                                $('#page591').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page592").addClass('active');
                                $('#page591').removeClass('active');
                        },300);
                };    
        });

        //FIFTH WIZARD RIDDLE
        $('.fifth_sorcerer_riddle_response').click(function(e) {
                var input = document.getElementById("fifth_sorcerer_riddle").value;

                if (input === "le temps" || input === "Le temps"|| input === "le Temps" || input === "Le Temps" || input === "temps" || input === "Temps"){
                        setTimeout(function(){
                                $("#page605").addClass('active');
                                $('#page600').removeClass('active');
                        },300);
                } else {
                        setTimeout(function(){
                                $("#page601").addClass('active');
                                $('#page600').removeClass('active');
                        },300);
                };    
        });
});