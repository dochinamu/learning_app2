var num=1;
var quiz_list = {
    1: {'type':'typing', 'question1': "동등연산자 == 사용하여 두 문자열이 동일한지 여부를 체크해보세요!", 'question2': `아래 빈칸을 클릭해주세요.`, 
    'pre_blank': `print("apple"`, 'after_blank': `"apple")`, 'answer': '='},
    2: {'type':'typing', 'question1': "아래 코드의 출력물은?", 'question2': `print(type(""))`, 
    'pre_blank': `print("apple"`, 'after_blank': `"apple")`, 'answer': '3'},
    3: {'type':'multiple', 'question1': "아래 코드의 출력물은?", 'question2': `print(type(""))`, 
    'choice1': `우루루꽝궁2`, 'choice2': `앵깽깽`, 'choice3': `뾰`, 'choice4': `쁑`, 'answer': '3'},
    4: {'type':'multiple', 'question1': "아래 코드의 출력물은?", 'question2': `print(type(""))`, 
    'choice1': `우루루꽝궁11123`, 'choice2': `앵깽깽`, 'choice3': `뾰`, 'choice4': `쁑`, 'answer': '3'},
}

var value='';


function next() {
    //번호 키우기
    num++;
    if (num > Object.keys(quiz_list).length) {
        console.log(num);
        location.href='complete.html';
    } else {
        console.log('num: ', num)
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
    //객관식형+블록형: 선지 바꾸고, 해당 틀 띄우기
    if (quiz_list[num]['type'] === 'multiple') {
        // for (var i=1; i < quiz_list[num]['choice_num']+1; i++) {
        //     console.log('i:', i)
        //     $("#choice"+String(i)).html(quiz_list[num]["choice"+String(i)]);
        // }
        $("#choice"+1).html(quiz_list[num]["choice"+1]);
        $("#choice"+2).html(quiz_list[num]["choice"+2]);
        $("#choice"+3).html(quiz_list[num]["choice"+3]);
        $("#choice"+4).html(quiz_list[num]["choice"+4]);

        console.log(quiz_list[num]['type'])
        // $("#"+quiz_list[num]['type']).show();       
    } //타이핑형: 입력된 내용 지우기 + 빈칸 앞 뒤 내용 바꾸고 틀 띄우기
    else if (quiz_list[num]['type'] === 'typing') {
        $('.underline').val("");
        $('#pre_blank').html(quiz_list[num]['pre_blank']);
        $('#after_blank').html(quiz_list[num]['after_blank']); 

        // $("#"+quiz_list[num]['type']).show() 
    } else {
        $('.underline').val("");

        $('.block1').html(quiz_list[num]['block1'])
        $('.block2').html(quiz_list[num]['block2'])
        $('.block3').html(quiz_list[num]['block3'])
        // $("#"+quiz_list[num]['type']).show() 
    } 
    
    $("#"+quiz_list[num]['type']).show()
    } 
}

//[객관식형] 선지 선택 시, 제출 버튼 활성화 + 값 받아와서 콘솔에 출력
$('.choice_btn').click(function() {
    $('.submit_btn').attr("disabled", false)
    value = $(this).prop('value');
    console.log('선택: ',value)
}) 

//[타이핑형] 뭐라도 입력해야 제출 버튼 활성화됨
$('.underline').on("input", function () {
    if ($('#input_text').val() != '') {
        $('.submit_btn').attr("disabled", false);
    } else {
        $('.submit_btn').attr("disabled", true);
    }
    
})

//[블록입력형] 블록 1
$('.block1').click(function () {
    value += '1'
    console.log(value)
    $('.submit_btn').attr("disabled", false)
    var placeholder = $('#input_text1').attr('placeholder')
    if (placeholder === '') {
        $('#input_text1').attr("placeholder", placeholder+' '+$('.block1').html())
    } else {
        var placeholder = $('#input_text2').attr('placeholder')
        if(placeholder === '') {
            $('#input_text2').attr("placeholder", placeholder+' '+$('.block1').html())
        } else {
            var placeholder = $('#input_text3').attr('placeholder')
            $('#input_text3').attr("placeholder", placeholder+' '+$('.block1').html())
        }      
    }   
})

//[블록입력형] 블록 2
$('.block2').click(function () {
    value += '2'
    console.log(value)
    $('.submit_btn').attr("disabled", false)
    var placeholder = $('#input_text1').attr('placeholder')
    if (placeholder === '') {
        $('#input_text1').attr("placeholder", placeholder+' '+$('.block2').html())
    } else {
        var placeholder = $('#input_text2').attr('placeholder')
        if(placeholder === '') {
            $('#input_text2').attr("placeholder", placeholder+' '+$('.block2').html())
        } else {
            var placeholder = $('#input_text3').attr('placeholder')
            $('#input_text3').attr("placeholder", placeholder+' '+$('.block2').html())
        }      
    }   
})

$('.block3').click(function () {
    value += '3'
    console.log(value)
    $('.submit_btn').attr("disabled", false)
    var placeholder = $('#input_text1').attr('placeholder')
    if (placeholder === '') {
        $('#input_text1').attr("placeholder", placeholder+' '+$('.block3').html())
    } else {
        var placeholder = $('#input_text2').attr('placeholder')
        if(placeholder === '') {
            $('#input_text2').attr("placeholder", placeholder+' '+$('.block3').html())
        } else {
            var placeholder = $('#input_text3').attr('placeholder')
            $('#input_text3').attr("placeholder", placeholder+' '+$('.block3').html())
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
})

//재시도 버튼: 오답 문구 숨기고, 비활 상태의 제출 버튼 보이기 + (혹시 모르니) 저장했던 답안 지우기
$('.retry_btn').click(function() {
    $('#not_correct').hide();
    if (quiz_list[num]['type'] === 'typing') {
        $('.underline').val('');
    }
     $('.submit_btn').attr("disabled", true)
    value = null; //필요 없는 코드일지도
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

