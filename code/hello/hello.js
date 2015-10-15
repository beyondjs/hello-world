define(function () {
    "use strict";

    return {
        'Controller': function () {
            this.show = function (done) {
                //array whith different responses
                var responses = ['<div class="lead text-center">"Two wrongs don\'t make a right."</div>',
                                '<div class="lead text-center">"The pen is mightier than the sword."</div>',
                                '<div class="lead text-center">"When the going gets tough, the tough get going."</div>',
                                '<div class="lead text-center">"No man is an island."</div>',
                                '<div class="lead text-center">"Fortune favors the bold."</div>',
                                '<div class="lead text-center">"People who live in glass houses should not throw stones"</div>',
                                '<div class="lead text-center">"Hope for the best, but prepare for the worst."</div>',
                                '<div class="lead text-center">"Better late than never."</div>',
                                '<div class="lead text-center">"Keep your friends close and your enemies closer."</div>',
                                '<div class="lead text-center">"A picture is worth a thousand words."</div>',
                                '<div class="lead text-center">"There\'s no such thing as a free lunch."</div>',
                                '<div class="lead text-center">"There\'s no place like home."</div>',
                                '<div class="lead text-center">"The early bird catches the worm."</div>',
                                '<div class="lead text-center">"You can\'t make an omelet without breaking a few eggs."</div>',
                                '<div class="lead text-center">"Never look a gift horse in the mouth."</div>',
                                '<div class="lead text-center">"You can\'t always get what you want."</div>',
                                '<div class="lead text-center">"Actions speak louder than words."</div>',
                                '<div class="lead text-center">"If it ain\'t broke, don\'t fix it."</div>',
                                '<div class="lead text-center">"Practice makes perfect."</div>',
                                '<div class="lead text-center">"Easy come, easy go."</div>',
                                '<div class="lead text-center">"Don\'t bite the hand that feeds you."</div>',
                                '<div class="lead text-center">"All good things must come to an end."</div>',
                                '<div class="lead text-center">"If you can\'t beat \'em, join \'em."</div>',
                                '<div class="lead text-center">"There\'s no time like the present."</div>',
                                '<div class="lead text-center">"You can\'t judge a book by its cover."</div>'];

                var html = module.render('click');
                var $click = $(html);
                $('#click').html($click);

                $click.click(function () {
                    //random value between 0 and 24
                    var index = Math.floor((Math.random() * 24));

                    var $response = $(responses[index]);
                    $('#response').html('');
                    $('#response').html($response);

                    $response.click(function() {
                        $('#response').html('');
                    });
                });
                done();
            };
        }
    };
});