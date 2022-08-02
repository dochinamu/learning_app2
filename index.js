var num=1;
var quiz_list = {
    1: {'type':'block', 'question1': "변수의 이름에는 '숫자'가 포함될 수 있어요. 여러개의 비슷한 변수들이 있을 때 변수에 숫자를 추가하면 보다 쉽게 구분할 수 있어요.", 'question2': `우선 변수 'city_1'을 만들어볼까요?`, 
    'block1': `1`, 'block2': `_`, 'block3': 'city', 'answer': '321'},
    2: {'type':'block', 'question1': "변수를 생성하고 변수의 이름을 정한 후에는 '='을 사용해서 변수에 value를 저장해요.", 'question2': `예를 들면, city_1="Seoul"`, 
    'block1': `"Seoul"`, 'block2': `=`, 'block3': 'city_1', 'answer': '321'},
    3: {'type':'block', 'question1': "value를 변수에 저장한다는 건, 물건을 캐리어에 넣는 것과 비슷해요.", 'question2': `"galaxy"를 'device_type'에 저장해보세요.`, 
    'block1': `"galaxy"`, 'block2': `device_type`, 'block3': `=`, 'answer': '231'},
    4: {'type':'block', 'question1': `우리가 변수에 저장한 "Seoul"과 "galaxy"는 모두 문자열(String)이에요.`, 'question2': `문자열은 처음과 끝을 큰따옴표로 묶어요.`, 
    'block1': `"`, 'block2': `/`, 'block3': `.`, 'block4': `.`, 'answer': '11'},
    5: {'type':'block', 'question1': `문자열에는 공백을 포함하여 모든 종류의 문자와 기호가 들어갈 수 있어요`, 'question2': `예를 들면, "코딩의 시작은 CO:DER"`, 
    'block1': `"`, 'block2': `_`, 'block3': `코딩의 시작은 CO:DER`, 'answer': '131'},
    6: {'type':'multiple', 'question1': ``, 'question2': `다음 중 변수는 무엇인가요?`, 
    'default_code': 'Id = "0921sean"','choice1': `Id`, 'choice2': `"0921sean"`, 'answer': '1'},
    7: {'type':'multiple', 'question1': ``, 'question2': `Value가 문자열인지 어떻게 알 수 있나요?`, 
    'choice1': `큰 따옴표 사이에 있기 때문에`, 'choice2': `= 표시가 있기 때문에`, 'answer': '1'},    
    8: {'type':'multiple', 'question1': ``, 'question2': `다음 코드에는 어떤 일이 일어나고 있나요?`, 
    'default_code': 'Measurement = "average"', 'choice1': `변수 "average"가 Measurement value를 저장하고 있다`, 'choice2': `변수 Measurement가 value "average"를 저장하고 있다.`, 'answer': '2'},
    9: {'type':'multiple', 'question1': ``, 'question2': `다음 중 변수의 이름은 무엇인가요?`, 
    'default_code': 'hobby = "tennis"', 'choice1': `hobby`, 'choice2': `"tennis"`, 'answer': '1'},
    10: {'type':'block', 'question1': ``, 'question2': `job 변수를 생성하고 "Developer" value를 지정해주세요.`, 
    'bogi': 'Name = "Sojeong"','block1': `"Developer"`, 'block2': `=`, 'block3': "job", 'answer': '321'},
    11: {'type':'block', 'question1': ``, 'question2': `job_title 변수에 문자열 값을 지정해주세요.`, 
    "bogi2":"job_title =",'block1': `"`, 'block2': `Marketer`, 'block3': `+`, 'block4': '"', 'answer': '121'},
    12: {'type': 'typing', 'question1': ``, 'question2': 'user_agent 변수에 문자열 값 "Mobile"을 지정해주세요.',
    'pre_blank': 'user_agent = ', 'after_blank': '', 'answer': `"Mobile"`}   
};
var value='';
$('.bogi2').hide()

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
        $('.underline').val("");
        $('#pre_blank').html(quiz_list[num]['pre_blank']);
        $('#after_blank').html(quiz_list[num]['after_blank']); 

        // $("#"+quiz_list[num]['type']).show() 
    } 
    // 블록입력형: 입력된 내용 지우기 + 길이 초기화 + 블럭 내용 바꾸고 틀 띄우기
    else if (quiz_list[num]['type'] === 'block') {
        $('.bogi').html('')
        $('.bogi2').html('')
        $('.underline').attr("value", "");
        $('#input_text1').attr("size", '2px')          
        $('#input_text2').attr("size", '2px')          
        $('#input_text3').attr("size", '2px')          

        if (num === 4) {
            $('#input_text2').attr('value', 'Miami')
            $('#input_text2').attr("size", $('#input_text2').val().length) 
        } else if (num === 10) {
            $('.bogi').html(quiz_list[num]['bogi'])
        } else if (num === 11) {
            $('.bogi2').show()
            $('.bogi2').html(quiz_list[num]['bogi2'])
        } else if (num == 12) {
            $('.bogi2').hide()
        }

        $('.block1').html(quiz_list[num]['block1'])
        $('.block2').html(quiz_list[num]['block2'])
        $('.block3').html(quiz_list[num]['block3'])
        // $("#"+quiz_list[num]['type']).show() 
    } 
    
    $("#"+quiz_list[num]['type']).show()
    if (num === 7) {$(".code_background").hide()}
    if (num === 8) {$(".code_background").show()}
    } 
}

$('.first_next_btn').click(function() {
    $('.explanation').hide();
    $('.question').show();
})

//[객관식형] 선지 선택 시, 제출 버튼 활성화 + 값 받아와서 콘솔에 출력
$('.choice_btn').click(function() {
    $('.submit_btn').attr("disabled", false)
    value = $(this).prop('value');
    // 테두리 표시도 toggle 방식으로 수정해야 함
    // $('#choice'+value).attr('style', 'border: 2px solid blue')
    console.log('선택: ',value)
    
}) 

//[타이핑형] 뭐라도 입력해야 제출 버튼 활성화됨
$('.underline').on("input", function (e) {
    $('#input_text').attr('size', $('#input_text').val().length)
    if ($('#input_text').val() != '') {
        $('.submit_btn').attr("disabled", false);
    } else {
        $('.submit_btn').attr("disabled", true);
    }
    
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
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '1'
            console.log(value)
            $('#input_text2').attr("value", $('.block1').html())
            $('#input_text2').attr("size", $('#input_text2').val().length)

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
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '2'
            console.log(value)
            $('#input_text2').attr("value", $('.block2').html())
            $('#input_text2').attr("size", $('#input_text2').val().length) 
        } else {
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
        value = $('.underline').val()
        console.log('제출한 답?', value)
        console.log('진짜 답은?', quiz_list[num]['answer'])
    }

    //정답 비교하고, 각 문구/버튼 띄움
    if (value === quiz_list[num]['answer']) {
        console.log('정답~')
        $('#correct').show();
    } else {
        $('#not_correct').show();
    }
    if (quiz_list[num]['type'] === 'multiple') {$('#choice'+value).attr("style", "border: 2px solid blue")}

})

//재시도 버튼: 오답 문구 숨기고, 비활 상태의 제출 버튼 보이기 + (혹시 모르니) 저장했던 답안 지우기
$('.retry_btn').click(function() {
    $('#not_correct').hide();
    if (quiz_list[num]['type'] === 'typing') {
        $('.underline').val('');
    } else if (quiz_list[num]['type'] === 'block') {
        $('#input_text1').attr("value", "");
        $('#input_text3').attr("value", "");
        $('#input_text1').attr("size", '2px')
        $('#input_text3').attr("size", '2px')                    
        if (num !== 4) {
            $('#input_text2').attr("value", "");  
            $('#input_text2').attr("size", '2px')           
        }
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

