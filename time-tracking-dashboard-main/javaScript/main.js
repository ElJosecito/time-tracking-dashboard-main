const hrsWork = document.querySelector(".hours_work");
const hrsWorkLast = document.querySelector(".hours_work_last");

const hrsPlay = document.querySelector(".hours_play");
const hrsPlayLast = document.querySelector(".hours_play_last");

const hrsStudy = document.querySelector(".hours_study");
const hrsStudyLast = document.querySelector(".hours_study_last");

const hrsExercise = document.querySelector(".hours_exercise");
const hrsExerciseLast = document.querySelector(".hours_exercise_last");

const hrsSocial = document.querySelector(".hours_social");
const hrsSocialLast = document.querySelector(".hours_social_last");

const hrsSelfCare = document.querySelector(".hours_self_care");
const hrsSelfCareLast = document.querySelector(".hours_self_care_last");

/* Botones */

const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");


const DailyFunc = () =>{

    fetch("http://127.0.0.1:5500/data.json")
  .then((response) => response.json())
  .then((json) => {

    //Daily
    const {
      0: {
        timeframes: {
            daily:{
            current: currentWork, 
            previous: previousWork },
        },
      },
      1: {
        timeframes:{
            daily:{
            current: currentPlay,
            previous: previousPlay
            }            
        }
      },
      2: {
        timeframes:{
            daily:{
            current: currentStudy,
            previous: previousStudy
            }            
        }
      },
      3: {
        timeframes:{
            daily:{
            current: currentExercise,
            previous: previousExercise
            }            
        }
      },
      4: {
        timeframes:{
            daily:{
            current: currentSocial,
            previous: previousSocial
            }            
        }
      },
      5: {
        timeframes:{
            daily:{
            current: currentSelfCare,
            previous: previousSelfCare
            }            
        }
      }
    } = json;

    //Work Card
    hrsWork.innerHTML = `${currentWork}hrs`;
    hrsWorkLast.innerHTML = `Last day - ${previousWork}hrs`;

    //Play card
    hrsPlay.innerHTML = `${currentPlay}hrs`;
    hrsPlayLast.innerHTML = `Last day - ${previousPlay}hrs`;

    //Study card
    hrsStudy.innerHTML = `${currentStudy}hrs`;
    hrsStudyLast.innerHTML = `Last day - ${previousStudy}hrs`;

    //Exercise card
    hrsExercise.innerHTML = `${currentExercise}hrs`;
    hrsExerciseLast.innerHTML = `Last day - ${previousExercise}hrs`;

    //Social card
    hrsSocial.innerHTML = `${currentSocial}hrs`;
    hrsSocialLast.innerHTML = `Last day - ${previousSocial}hrs`;

    //Self care card
    hrsSelfCare.innerHTML = `${currentSelfCare}hrs`;
    hrsSelfCareLast.innerHTML = `Last day - ${previousSelfCare}hrs`;
  });
};

const WeeklyFunc = () =>{

    fetch("http://127.0.0.1:5500/data.json")
  .then((response) => response.json())
  .then((json) => {
    
    //Daily
    const {
      0: {
        timeframes: {
            weekly:{
            current: currentWork, 
            previous: previousWork },
        },
      },
      1: {
        timeframes:{
            weekly:{
            current: currentPlay,
            previous: previousPlay
            }            
        }
      },
      2: {
        timeframes:{
            weekly:{
            current: currentStudy,
            previous: previousStudy
            }            
        }
      },
      3: {
        timeframes:{
            weekly:{
            current: currentExercise,
            previous: previousExercise
            }            
        }
      },
      4: {
        timeframes:{
            weekly:{
            current: currentSocial,
            previous: previousSocial
            }            
        }
      },
      5: {
        timeframes:{
            weekly:{
            current: currentSelfCare,
            previous: previousSelfCare
            }            
        }
      }
    } = json;

    //Work Card
    hrsWork.innerHTML = `${currentWork}hrs`;
    hrsWorkLast.innerHTML = `Last week - ${previousWork}hrs`;

    //Play card
    hrsPlay.innerHTML = `${currentPlay}hrs`;
    hrsPlayLast.innerHTML = `Last week - ${previousPlay}hrs`;

    //Study card
    hrsStudy.innerHTML = `${currentStudy}hrs`;
    hrsStudyLast.innerHTML = `Last week - ${previousStudy}hrs`;

    //Exercise card
    hrsExercise.innerHTML = `${currentExercise}hrs`;
    hrsExerciseLast.innerHTML = `Last week - ${previousExercise}hrs`;

    //Social card
    hrsSocial.innerHTML = `${currentSocial}hrs`;
    hrsSocialLast.innerHTML = `Last week - ${previousSocial}hrs`;

    //Self care card
    hrsSelfCare.innerHTML = `${currentSelfCare}hrs`;
    hrsSelfCareLast.innerHTML = `Last week - ${previousSelfCare}hrs`;
  });
};

const MonthlyFunc = () =>{

    fetch("http://127.0.0.1:5500/data.json")
  .then((response) => response.json())
  .then((json) => {
    
    //Daily
    const {
      0: {
        timeframes: {
            monthly:{
            current: currentWork, 
            previous: previousWork },
        },
      },
      1: {
        timeframes:{
            monthly:{
            current: currentPlay,
            previous: previousPlay
            }            
        }
      },
      2: {
        timeframes:{
            monthly:{
            current: currentStudy,
            previous: previousStudy
            }            
        }
      },
      3: {
        timeframes:{
            monthly:{
            current: currentExercise,
            previous: previousExercise
            }            
        }
      },
      4: {
        timeframes:{
            monthly:{
            current: currentSocial,
            previous: previousSocial
            }            
        }
      },
      5: {
        timeframes:{
            monthly:{
            current: currentSelfCare,
            previous: previousSelfCare
            }            
        }
      }
    } = json;

    //Work Card
    hrsWork.innerHTML = `${currentWork}hrs`;
    hrsWorkLast.innerHTML = `Last month - ${previousWork}hrs`;

    //Play card
    hrsPlay.innerHTML = `${currentPlay}hrs`;
    hrsPlayLast.innerHTML = `Last month - ${previousPlay}hrs`;

    //Study card
    hrsStudy.innerHTML = `${currentStudy}hrs`;
    hrsStudyLast.innerHTML = `Last month - ${previousStudy}hrs`;

    //Exercise card
    hrsExercise.innerHTML = `${currentExercise}hrs`;
    hrsExerciseLast.innerHTML = `Last month - ${previousExercise}hrs`;

    //Social card
    hrsSocial.innerHTML = `${currentSocial}hrs`;
    hrsSocialLast.innerHTML = `Last month - ${previousSocial}hrs`;

    //Self care card
    hrsSelfCare.innerHTML = `${currentSelfCare}hrs`;
    hrsSelfCareLast.innerHTML = `Last month - ${previousSelfCare}hrs`;
  });
};


dailyBtn.addEventListener("click", ()=>{
    DailyFunc();
});

weeklyBtn.addEventListener("click", ()=>{
    WeeklyFunc();
});

monthlyBtn.addEventListener("click", ()=>{
    MonthlyFunc();
})
