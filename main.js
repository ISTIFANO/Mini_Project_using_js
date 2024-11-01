const Ques = [
    { question: "How does the billing work?", answer: "Billing is done on a monthly basis based on your usage." },
    { question: "What is the cancellation policy?", answer: "You can cancel anytime before the billing period ends without any extra charges." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan anytime from your account settings." },
];

function AllQ() {
    const Container = document.getElementById("faq-container");
    Container.innerHTML = "";  

    Ques.forEach((item, index) => {
        const details = document.createElement("details");
        details.classList.add("group", "py-5");

        const summary = document.createElement("summary");
        summary.classList.add("flex", "cursor-pointer", "list-none", "items-center", "justify-between", "font-medium");
        summary.textContent = `${index + 1}. ${item.question}`;

        const icon = document.createElement("span");
        icon.classList.add("transition", "group-open:rotate-180");
        icon.innerHTML = `
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" 
               stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        `;
        summary.appendChild(icon);

        const answer = document.createElement("p");
        answer.classList.add("group-open:animate-fadeIn", "mt-3", "text-neutral-600");
        answer.textContent = item.answer;

        details.appendChild(summary);
        details.appendChild(answer);

        Container.appendChild(details);
    });
}


function openModal() {
    document.getElementById("modal").classList.remove("hidden");
}

function Close() {
    document.getElementById("modal").classList.add("hidden");
}


function addQuestion() {
    const newQuestion = document.getElementById("newQuestion").value;
    const newAnswer = document.getElementById("newAnswer").value;

    if (newQuestion && newAnswer) {


        Ques.push({ question: newQuestion, answer: newAnswer });
        AllQ(); 
       
       
        Close(); 
        document.getElementById("newQuestion").value = "";



        document.getElementById("newAnswer").value = "";
    } else {
        alert("Please enter both a question and an answer.");
    }
}

window.onload = AllQ;
