<script>
  import { onMount } from "svelte";

  let quiz = ""

    // onMount(() => {
    //     fetch("http://localhost:8000/random-quiz", {
    //         method: "POST"
    //     })
    //     .then(e => e.json())
    //     .then(e => {
    //         quiz = e
    // console.log(e)

    //     })
    // })

    let testQuiz = [
        { "quiz": { "title": "Cricket Trivia", "questions": [ { "question": "Which country is considered the birthplace of cricket?", "options": ["England", "India", "Australia", "South Africa"], "answer": "England" }, { "question": "What is the maximum number of runs a batsman can score off a single ball in cricket?", "options": ["4", "6", "8", "12"], "answer": "6" }, { "question": "Who holds the record for the highest individual score in Test cricket?", "options": ["Sachin Tendulkar", "Brian Lara", "Don Bradman", "Kumar Sangakkara"], "answer": "Brian Lara" }, { "question": "What is the name of the boundary line in cricket?", "options": ["Crease", "Pitch", "Boundary", "Wicket"], "answer": "Boundary" }, { "question": "Which cricket team has won the most ICC Cricket World Cups?", "options": ["Australia", "India", "West Indies", "Sri Lanka"], "answer": "Australia" }, { "question": "What is the name of the delivery that bounces high and takes a sharp turn?", "options": ["Bouncer", "Googly", "Yorker", "Off-break"], "answer": "Bouncer" }, { "question": "Which term refers to the dismissal of a batsman when the ball hits the stumps directly?", "options": ["Bowled", "Caught", "Run out", "Stumped"], "answer": "Bowled" }, { "question": "What is the name of the official governing body for cricket?", "options": ["ICC", "BCCI", "ECB", "Cricket Australia"], "answer": "ICC" }, { "question": "Which cricket team is known as the 'Men in Blue'?", "options": ["India", "Australia", "South Africa", "Pakistan"], "answer": "India" }, { "question": "What is the name of the famous cricket stadium in Lord's, London?", "options": ["The Oval", "Wankhede Stadium", "Melbourne Cricket Ground", "Lord's Cricket Ground"], "answer": "Lord's Cricket Ground" } ] } }
    ]
</script>

<main>
  <h1 class="font-extrabold text-gray-900 text-4xl text-center mt-4">
    Welcome to Quiz Generator!
  </h1>

  <button class="p-3 w-full bg-purple-500 text-gray-800 font-extrabold rounded-xl text-xl hover:scale-125 transition-all mt-2">Generate a random quiz</button>


  <div class="quiz p-5 m-4 bg-gray-100 rounded-xl md:w-1/2  ">
    <div class="title font-black text-gray-800  text-4xl">{testQuiz[0].quiz.title}</div>
    {#each testQuiz[0].quiz.questions as q ,i }
    <div class="p-2 my-4">
        <div class="text-2xl font-bold text-gray-700">{i + 1}. {q.question}</div>
        <div class="options grid grid-cols-12 gap-4 mt-3 ">
            {#each q.options as option}
                <div class="col-span-6  p-4 flex items-center hover:bg-gray-200 rounded-xl transition-all "><input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl border-gray-600">
                    <span class="ml-2 text-xl font-bold text-gray-800">{option}</span></div>
            {/each}
        </div>
        </div>
    {/each}
  </div>
</main>
