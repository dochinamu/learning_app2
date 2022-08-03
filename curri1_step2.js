var num=1;
var quiz_list = {
    1: {'type':'block', 'question1': "print()는 특별한 명령어예요. 컴퓨터가 콘솔(또는 shell)이라는 공간에 value를 출력하게끔 하죠.", 'question2': `콘솔에 Hello, World!를 출력하여 반갑게 인사해볼까요?`, 
    'block1': `1`, 'block': 'print','answer': '1'},
    2: {'type':'block', 'question1': "", 'question2': `‘print()’ 명령어를 사용하면, 컴퓨터는 콘솔에 값을 한 줄씩 출력해요.`, 
    'block1': `(`, 'block2': `)`, 'answer': '12'},
    3: {'type':'block', 'question1': "greeting과 같은 변수(Variable)를 출력할 때에도, print()를 사용할 수 있어요.", 'question2': `콘솔에 변수를 출력하면, 변수명 대신 값(value)이 출력됩니다`, 
    'bogi': `greeting = "Hello, World!`, 'bogi2': 'print', 'block1': `)`, 'block2': `greeting`, 'block3': `(`, 'answer': '321'},
    4: {'type':'multiple', 'question1': `콘솔에 대한 설명으로 옳은 것을 고르세요.`, 'question2': ``, 
    'choice1': `코드를 작성하는 공간`, 'choice2': `코드의 결과물이 출력되는 공간`, 'answer': '2'},
    5: {'type':'multiple', 'question1': `print()는 무슨 역할을 하나요?`, 'question2': ``, 
    'choice1': `콘솔에 값(value)을 출력한다.`, 'choice2': `변수를 생성한다.`, 'answer': '1'},
    6: {'type':'multiple', 'question1': `아래의 코드는 콘솔에 어떤 결과를 출력할까요?`, 'question2': ``, 
    'default_code': 'sport = "B-ball" <br/> print(sport)', 'choice1': `sport`, 'choice2': `B-ball`, 'answer': '2'},
    7: {'type':'typing', 'question1': `변수 major의 값을 출력해보세요.`, 'question2': ``, 
    'pre_blank': `major = "computer engineering" <br/>`, 'after_blank': '', 'answer': 'print(major)'},    
    8: {'type':'block', 'question1': `변수는 저장하는 값이 바뀔 수 있기 때문에, 변수(Variable)라고 부릅니다.`, 'question2': `‘=’를 사용하여 새 값을 저장하면, 새로운 값을 변수에 저장할 수 있어요. 변수의 값을 새롭게 저장하고 나면, 이전 값은 잊혀집니다.`,
    'block1': `=`, 'block2': `:`, 'answer': '1'},
    9: {'type':'block', 'question1': `변수에 다른 변수의 값을 저장할 수도 있어요.`, 'question2': `아래의 코드에서 변수 new_status에 default_option의 값을 저장해볼까요? `, 
    'block1': `default_option`, 'block2': `( )`, 'block3': 'print', 'answer': '1'},
    10: {'type':'multiple', 'question1': `이 코드는 콘솔에 어떤 결과를 출력할까요?`, 'question2': ``, 
    'choice1': 'Watching a moive', 'choice2': 'status', 'default_code': 'status = "Watching a movie" <br/> print(status)', 'answer': '1'},
    11: {'type':'typing', 'question1': `변수 status의 값을 “Writing code”로 바꿔보세요.`, 'question2': ``, 
    "pre_blank":`status = "Completing spreadsheet" <br/>`,'after_blank': `print(status)`, 'answer': 'status = "Writing code"' || 'status= "Writing code"' || 'status ="Writing code"' || 'status="Writing code"'},
    12: {'type': 'typing', 'question1': `변수 status의 값을 “Complete”로 바꾸고 그 값을 출력해보세요.`, 'question2': '',
    'pre_blank': 'status = "Loading" <br>', 'after_blank': '', 'answer': `status = "Complete"`, 'answer2': 'print(status)'}   
};
var value='';
var value2='';
$('.bogi2').hide()
$('.bogi3').hide()

if (num === 1) {
    $('.bogi2').show()
    $('.bogi2').html('print(')
    $('.bogi3').show()
    $('.bogi3').html(')')
    $('#input_text2').hide(); $('#input_text3').hide();
    $('.block3').hide();
}

function next() {
    //번호 키우기
    num++;
    value='';
    if (num > Object.keys(quiz_list).length) {
        console.log(num);
        location.href='complete.html';
        //location.href="{% url 'python1_1_complete' %}";

    } else {
        console.log('quiz num: ', num)
    //비활 상태의 제출 버튼 띄워!
    $('.submit_btn').attr("disabled", true)
    $('#submit').show();
    //질문 내용 바꿔!
    $("#text1").html(quiz_list[num]['question1'])
    $("#text2").html(quiz_list[num]["question2"]);

    //문제 형식이 바뀐다면, 이전 문제 틀 숨기기
    if (quiz_list[num-1]['type'] != quiz_list[num]['type']) {
        var preType = quiz_list[num-1]['type']
        $("#"+preType).hide()
    }

    //progress bar fill
    $(".progress-bar").attr("style", "width: calc(100/12*" + num + "%)");
    //객관식형: 테두리 색상 없애고 선지 바꾸고, 해당 틀 띄우기
    if (quiz_list[num]['type'] === 'multiple') {
        // for (var i=1; i < quiz_list[num]['choice_num']+1; i++) {
        //     console.log('i:', i)
        //     $("#choice"+String(i)).html(quiz_list[num]["choice"+String(i)]);
        // }
        $('.choice_btn').attr("style", "border: 1px solid rgb(170, 170, 170)")
        
        $("#default_code").html(quiz_list[num]["default_code"])
        
        $("#choice"+1).html(quiz_list[num]["choice"+1]);
        $("#choice"+2).html(quiz_list[num]["choice"+2]);
        // $("#choice"+3).html(quiz_list[num]["choice"+3]);
        // $("#choice"+4).html(quiz_list[num]["choice"+4]);
        

        console.log(quiz_list[num]['type'])
        // $("#"+quiz_list[num]['type']).show();       
    } //타이핑형: 입력된 내용 지우기 + 빈칸 앞 뒤 내용 바꾸고 틀 띄우기
    else if (quiz_list[num]['type'] === 'typing') {
        $('#input_text').val("");
        $('#input_text_b').val("");
        $('#pre_blank').html(quiz_list[num]['pre_blank']);
        $('#after_blank').html(quiz_list[num]['after_blank']); 
        if (num === 12) {
            $('#input_text').attr('size', '1px')
            $('#input_text_b').attr('size', '1px')
            $('#input_text_b').show()
        }

        // $("#"+quiz_list[num]['type']).show() 
    } 
    // 블록입력형: 입력된 내용 지우기 + 길이 초기화 + 블럭 내용 바꾸고 틀 띄우기
    else if (quiz_list[num]['type'] === 'block') {
        $('.bogi').html('')
        $('.bogi2').html('')
        $('.bogi3').html('')
        $('.underline').attr("value", "");
        $('.underline').attr("size", '1px')          

        if (num === 2) {
            $('.bogi').html(`print("Wind")`);
            $('#input_text2').show();

            $('.bogi2').show()
            $('.bogi2').html('print')
            $('.bogi3').show()
            $('.bogi3').html('"Breaker"')

        } else if (num === 3) {
            $('.bogi').html('greeting = "Hello, World!"')
            $('.bogi2').html('print')

            $('#input_text3').show();
            $('.block3').show();
        } else if (num === 8) {
            $('.code_background').attr('style', 'height: 40%')
            $('.bogi').html('status = "Studying Python"')
            $('.bogi2').html('status')
            $('.bogi3').html('"Drinking a cup of coffee" <br/> &nbsp; print(status)')
            $('#input_text2').hide();
            $('#input_text3').hide();
            $('.block3').hide()
        } else if (num == 9) {
            $('.code_background').attr('style', 'height: 40%')
            $('.bogi').html('default_option = "upload" <br/> new_status = "download" <br/>')
            $('.bogi2').html('new_status = ')
            $('.bogi3').html('<br/> &nbsp; print(new_status)')
            $('.block3').show()
        }

        $('.block1').html(quiz_list[num]['block1'])
        $('.block2').html(quiz_list[num]['block2'])
        $('.block3').html(quiz_list[num]['block3'])
        // $("#"+quiz_list[num]['type']).show() 
    } 
    
    $("#"+quiz_list[num]['type']).show()
    if (num === 4 || num === 5) {$(".code_background").hide()}
    if (num === 6) {$(".code_background").show()}
    } 
}

$('.first_next_btn').click(function() {
    $('.explanation').hide();
    $('.question').show();
})
$('#input_text_b').hide()

//[객관식형] 선지 선택 시, 제출 버튼 활성화 + 값 받아와서 콘솔에 출력
$('.choice_btn').click(function() {
    $('.submit_btn').attr("disabled", false)
    value = $(this).prop('value');
    // 테두리 표시도 toggle 방식으로 수정해야 함
    // $('#choice'+value).attr('style', 'border: 2px solid blue')
    console.log('선택: ',value)
    
}) 

//[타이핑형] 뭐라도 입력해야 제출 버튼 활성화됨
$('#input_text').on("input", function (e) {
    $('#input_text').attr('size', $('#input_text').val().length)
    if ($('#input_text').val() != '') {
        $('.submit_btn').attr("disabled", false);
    } else {
        $('.submit_btn').attr("disabled", true);
    }
    
})

$('#input_text_b').on("input", function (e) {
    $('#input_text_b').attr('size', $('#input_text_b').val().length)
})

//[블록입력형] 블록 1: value에 버튼 id 누적 + 제출 버튼 활성화 + 버튼 한 번 클릭 시 input 하나의 placeholder 내용에 버튼 내용 띄우기 
$('.block1').click(function () {
    $('.submit_btn').attr("disabled", false)
    var input_value = $('#input_text1').attr('value')
    if (input_value === "") {
        value += '1'
        console.log(value)
        $('#input_text1').attr("value", $('.block1').html())
        $('#input_text1').attr("size", $('#input_text1').val().length)

    } else {
        if (num === 1 || num === 8) {
            return;
        } else {
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '1'
            console.log(value)
            $('#input_text2').attr("value", $('.block1').html())
            $('#input_text2').attr("size", $('#input_text2').val().length)

        } else {
            if(num === 2) {
                return;
            } else {
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '1'
                console.log(value)
                $('#input_text3').attr("value", $('.block1').html())
                $('#input_text3').attr("size", $('#input_text3').val().length) 
            } else {
                return;
            }
        }
        }
    }      
    }   
})

//[블록입력형] 블록 2: 위와 동일
$('.block2').click(function () {
    $('.submit_btn').attr("disabled", false)
    var input_value = $('#input_text1').attr('value')
    if (input_value === "") {
        value += '2'
        console.log(value)
        $('#input_text1').attr("value", $('.block2').html())
        $('#input_text1').attr("size", $('#input_text1').val().length) 
    } else {
        if (num === 1 || num === 8) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '2'
            console.log(value)
            $('#input_text2').attr("value", $('.block2').html())
            $('#input_text2').attr("size", $('#input_text2').val().length) 
        } else {
            if (num === 2 ) {
                return;
            }
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '2'
                console.log(value)
                $('#input_text3').attr("value", $('.block2').html())
                $('#input_text3').attr("size", $('#input_text3').val().length) 
            } else {
                return;
            }
        }      
    }  
})

//[블록입력형] 블록 3: 위와 동일
$('.block3').click(function () {
    $('.submit_btn').attr("disabled", false)
    var input_value = $('#input_text1').attr('value')
    if (input_value === "") {
        value += '3'
        console.log(value)
        $('#input_text1').attr("value", $('.block3').html())
        $('#input_text1').attr("size", $('#input_text1').val().length) 
    } else {
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '3'
            console.log(value)
            $('#input_text2').attr("value", $('.block3').html())
            $('#input_text2').attr("size", $('#input_text2').val().length) 

        } else {
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '3'
                console.log(value)
                $('#input_text3').attr("value", $('.block3').html())
                $('#input_text3').attr("size", $('#input_text3').val().length) 
            } else {
                return;
            }
        }      
    }   
})

//제출 버튼: 제출 폼 숨기기
$('.submit_btn').click(function() {
    $('#submit').hide();
    
    // 선지 버튼들 비활성화 하는 거 뭐 때문인지는 모르는데 안 됨 ㅠㅋ
    // $(".choice_btn").attr("disalbed", true);

    //[타이핑형] 답 저장: 입력할 때마다 value값에 저장하려니 console 차는 게 싫어서, '제출'할 때 저장함 
    if (quiz_list[num]['type'] === 'typing') {
        value = $('#input_text').val()
        value2 = $('#input_text_b').val()
        console.log('제출한 답?', value)
        console.log('진짜 답은?', quiz_list[num]['answer'])
    }

    //정답 비교하고, 각 문구/버튼 띄움
    if (((num !== 12) && (value === quiz_list[num]['answer'])) || ((num === 12) && ((value === quiz_list[num]['answer']) && (value2 === quiz_list[12]['answer2'])))) {
        console.log('정답~')
        $('#correct').show();
    } else {
        $("#not_correct").show();
    }
    if (quiz_list[num]['type'] === 'multiple') {$('#choice'+value).attr("style", "border: 2px solid blue")}

})

//재시도 버튼: 오답 문구 숨기고, 비활 상태의 제출 버튼 보이기 + (혹시 모르니) 저장했던 답안 지우기
$('.retry_btn').click(function() {
    $('#not_correct').hide();
    if (quiz_list[num]['type'] === 'typing') {
        $('#input_text').val('');
        $('#input_text_b').val('');
    } else if (quiz_list[num]['type'] === 'block') {
        $('#input_text1').attr("value", "");
        $('#input_text3').attr("value", "");
        $('#input_text1').attr("size", '1px')
        $('#input_text3').attr("size", '1px')                    
        $('#input_text2').attr("value", "");  
        $('#input_text2').attr("size", '1px')           
    } else if (quiz_list[num]['type'] === 'multiple') {
        $('#choice'+value).attr("style", "border: 1px solid rgb(170, 170, 170)")
    }
     $('.submit_btn').attr("disabled", true)
    value = ""; //필요 없는 코드일지도
    $('#submit').show();

})

//skip(오답)과 다음(정답) 버튼: 오답 문구 숨기고, next 함수 실행
$('.skip_btn').click(function() {
    $('#not_correct').hide();
    next();
})

$('.correct_btn').click(function() {
    $('#correct').hide();
    next();
})

