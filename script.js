NEW_FILE_CODE
// 全局变量
let currentQuestionIndex = 0;
let answeredQuestions = new Set();
let userAnswers = {};

// DOM元素
const questionText = document.getElementById('questionText');
const optionsArea = document.getElementById('optionsArea');
const answerSection = document.getElementById('answerSection');
const correctAnswer = document.getElementById('correctAnswer');
const analysis = document.getElementById('analysis');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const analysisBtn = document.getElementById('analysisBtn');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const answeredCountEl = document.getElementById('answeredCount');
const progressFill = document.getElementById('progressFill');

// 初始化
function init() {
    console.log('Initializing...');
    console.log('Questions variable:', typeof questions);
    console.log('Questions length:', questions ? questions.length : 'undefined');
    
    if (!questions || questions.length === 0) {
        questionText.textContent = '暂无题目数据，请在questions.js中添加题目';
        console.log('No questions found!');
        return;
    }
    
    console.log('Questions loaded successfully, length:', questions.length);
    totalQuestionsEl.textContent = `共 ${questions.length} 题`;
    loadQuestion(currentQuestionIndex);
    setupEventListeners();
}

// 加载题目
function loadQuestion(index) {
    const question = questions[index];
    
    // 更新题号显示
    currentQuestionEl.textContent = `第 ${index + 1} 题`;
    
    // 更新题目文本
    questionText.textContent = `第 ${index + 1} 题：${question.question}`;
    
    // 清空并生成选项
    optionsArea.innerHTML = '';
    question.options.forEach((option, i) => {
        const optionBtn = createOptionButton(option, i);
        optionsArea.appendChild(optionBtn);
    });
    
    // 如果已回答过，显示答案
    if (answeredQuestions.has(index)) {
        showAnswer(index);
    } else {
        hideAnswer();
    }
    
    // 更新按钮状态
    updateButtonStates();
    
    // 更新进度
    updateProgress();
    
    // 添加淡入动画
    document.querySelector('.question-area').classList.add('fade-in');
    setTimeout(() => {
        document.querySelector('.question-area').classList.remove('fade-in');
    }, 500);
}

// 创建选项按钮
function createOptionButton(option, index) {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    
    const label = String.fromCharCode(65 + index); // A, B, C, D
    btn.innerHTML = `<span class="option-label">${label}</span><span>${option.substring(3)}</span>`;
    
    btn.addEventListener('click', () => selectOption(index));
    
    return btn;
}

// 选择选项
function selectOption(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const selectedLabel = String.fromCharCode(65 + selectedIndex);
    const isCorrect = selectedLabel === question.correctAnswer;
    
    // 标记为已回答
    answeredQuestions.add(currentQuestionIndex);
    userAnswers[currentQuestionIndex] = selectedLabel;
    
    // 禁用所有选项
    const optionBtns = optionsArea.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, index) => {
        btn.disabled = true;
        const label = String.fromCharCode(65 + index);
        
        if (label === question.correctAnswer) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // 显示答案
    showAnswer(currentQuestionIndex);
    
    // 启用下一题按钮
    updateButtonStates();
    
    // 更新进度
    updateProgress();
}

// 显示答案
function showAnswer(index) {
    const question = questions[index];
    correctAnswer.textContent = `正确答案：${question.correctAnswer}`;
    analysis.textContent = question.analysis || '暂无解析';
    answerSection.style.display = 'block';
    analysisBtn.disabled = false;
}

// 隐藏答案
function hideAnswer() {
    answerSection.style.display = 'none';
    analysisBtn.disabled = true;
}

// 更新按钮状态
function updateButtonStates() {
    // 上一题按钮
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // 下一题按钮
    const isAnswered = answeredQuestions.has(currentQuestionIndex);
    nextBtn.disabled = !isAnswered;
    
    // 查看解析按钮
    analysisBtn.disabled = !isAnswered;
}

// 更新进度
function updateProgress() {
    const answered = answeredQuestions.size;
    const total = questions.length;
    const percentage = (answered / total) * 100;
    
    answeredCountEl.textContent = answered;
    progressFill.style.width = `${percentage}%`;
}

// 事件监听器设置
function setupEventListeners() {
    // 上一题
    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });
    
    // 下一题
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            // 到达最后一题，显示完成提示
            showCompletionMessage();
        }
    });
    
    // 查看解析
    analysisBtn.addEventListener('click', () => {
        if (answerSection.style.display === 'none') {
            answerSection.style.display = 'block';
        } else {
            answerSection.style.display = 'none';
        }
    });
}

// 显示完成提示
function showCompletionMessage() {
    const correctCount = Object.values(userAnswers).filter((answer, index) => {
        return answer === questions[index].correctAnswer;
    }).length;
    
    const accuracy = ((correctCount / questions.length) * 100).toFixed(1);
    
    alert(`恭喜完成所有题目！\n\n正确率：${accuracy}%\n答对：${correctCount} 题\n总共：${questions.length} 题\n\n您可以重新练习或退出。`);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);