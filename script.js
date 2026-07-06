const battles=[{title:"第1戦：熱分解スライム",bossName:"熱分解スライム",bossSub:"質量から熱分解式を見抜け。",bossImg:"img/slime.png",hp:200,baseData:["NaHCO₃=84","NaOH=40","Na₂CO₃=106","Na₂O=62","H₂O=18","CO₂=44"],questions:[
{tag:"物質量",focus:"",hint:"式量84を使って、質量÷式量で物質量を求めるのじゃ。",q:"NaHCO₃を8.4g加熱した。NaHCO₃の物質量は？",a:"0.10 mol",choices:["0.10 mol","1.0 mol","0.084 mol","8.4 mol"],exp:"NaHCO₃の式量は84。8.4÷84=0.10mol。"},
{tag:"理論値",focus:"今回考える反応式：<br>(b) 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂",hint:"係数比を見るのじゃ。NaHCO₃が2なら、Na₂CO₃は1じゃ。",q:"この式の場合、0.10molのNaHCO₃からNa₂CO₃は何molできる？",a:"0.050 mol",choices:["0.050 mol","0.10 mol","0.20 mol","0.0050 mol"],exp:"係数比は NaHCO₃:Na₂CO₃=2:1。0.10molの半分、0.050molのNa₂CO₃ができる。"},
{tag:"質量",focus:"今回考える反応式：<br>(b) 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂",hint:"質量は、物質量×式量で求めるのじゃ。",q:"0.050molのNa₂CO₃の質量は？",a:"5.3 g",choices:["5.3 g","10.6 g","4.0 g","6.2 g"],exp:"0.050×106=5.3g。実験値と近いなら、(b)を支持する証拠になる。"},
{tag:"考察",focus:"実験値と理論値を比較せよ！",hint:"実験値と理論値が近いかどうかが証拠になるのじゃ。",q:"質量の比較だけで反応式を考えるとき、一番大切なのはどれ？",a:"候補ごとの理論値と実測値を比べること",choices:["候補ごとの理論値と実測値を比べること","見た目の色だけで判断すること","加熱時間だけで決めること","気体が出たら全部同じ反応と考えること"],exp:"候補ごとの理論値を計算し、実測値と比較することで、実験データが証拠になる。"},
{tag:"FINAL",focus:"最終問題：実験結果に合う反応式を選べ！",hint:"実測値5.3gと一致する理論値を出した式を選ぶのじゃ。",q:"結論として、実験で残った白色固体の質量が約5.3gだった。最も適切な化学反応式はどれ？",a:"2NaHCO₃ → Na₂CO₃ + H₂O + CO₂",choices:["NaHCO₃ → NaOH + CO₂","2NaHCO₃ → Na₂CO₃ + H₂O + CO₂","2NaHCO₃ → Na₂O + H₂O + 2CO₂","NaHCO₃ → NaH + CO + O₂"],exp:"実測値約5.3gと理論値が一致するのは、2NaHCO₃ → Na₂CO₃ + H₂O + CO₂。したがって、この式が最も適切である。",final:true}]},
{title:"第2戦：CaCO₃ゴーレム",bossName:"CaCO₃ゴーレム",bossSub:"CO₂の質量から未知の塩酸濃度を攻略せよ。",bossImg:"img/golem.png",hp:280,baseData:["CaCO₃=100","HCl=36.5","CO₂=44","20.0mL=0.0200L","反応式","CaCO₃+2HCl→CaCl₂+CO₂+H₂O"],questions:[
{tag:"原点",focus:"CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O",hint:"CaCO₃を加えなければ、CO₂は発生しないのじゃ。",q:"CaCO₃をまったく加えないとCO₂は発生しない。このとき近似線は？",a:"原点(0,0)を通る線として考える",choices:["原点(0,0)を通る線として考える","原点を通らない線にする","横軸と平行な線にする","グラフは描けない"],exp:"CaCO₃が0ならCO₂も0。最初の直線部分は原点を通ると考えるのが自然。"},
{tag:"モデル",focus:"CO₂の質量は、最初増えるが途中から一定になる",hint:"最初はCaCO₃が足りない。途中から塩酸が足りなくなるのじゃ。",q:"CaCO₃を増やすとCO₂の質量は最初増えるが、途中から増えなくなる。最も適切なモデルは？",a:"二本の直線で近似する",choices:["二本の直線で近似する","一本の曲線で近似する","最後まで一本の直線で増え続ける","点を結ばず考えない"],exp:"最初はCaCO₃が不足。途中からHClが不足し、CO₂の質量が頭打ちになる。"},
{tag:"折れ曲がり",focus:"折れ曲がり＝塩酸がちょうど使い切られる点",hint:"増やしているのはCaCO₃。では、足りなくなる相手は何かのう。",q:"CO₂の質量が途中から増えなくなる理由は？",a:"HClが不足し、CaCO₃を増やしても反応が進まなくなるから",choices:["HClが不足し、CaCO₃を増やしても反応が進まなくなるから","CaCO₃が途中で増えなくなるから","CO₂の式量が変わるから","反応式の係数が途中で変わるから"],exp:"相手であるHClが不足すると、CaCO₃を増やしても反応は進まない。"},
{tag:"CO₂量",focus:"CO₂ = 44<br>発生したCO₂の質量 = 1.32g",hint:"CO₂の物質量は、質量÷式量で求めるのじゃ。",q:"20.0mLの塩酸と過不足なく反応したとき、発生したCO₂は1.32gだった。CO₂の物質量は？",a:"0.030 mol",choices:["0.030 mol","0.060 mol","0.015 mol","0.30 mol"],exp:"CO₂の式量は44。1.32÷44=0.030mol。"},
{tag:"係数比",focus:"CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O<br>HCl : CO₂ = 2 : 1",hint:"CO₂が1ならHClは2じゃ。係数比を見るのじゃ。",q:"CO₂が0.030mol発生した。反応したHClの物質量は？",a:"0.060 mol",choices:["0.060 mol","0.030 mol","0.015 mol","0.090 mol"],exp:"反応式より HCl:CO₂=2:1。CO₂が0.030molなら、HClは0.060mol。"},
{tag:"FINAL",focus:"発生したCO₂ 1.32g → CO₂ 0.030mol<br>HClはその2倍<br>塩酸は20.0mL",hint:"CO₂の質量→CO₂の物質量→HClの物質量→M=n/Vの順で考えるのじゃ。",q:"1.32gのCO₂を発生させた20.0mLの塩酸のモル濃度は？",a:"3.0 mol/L",choices:["1.5 mol/L","2.0 mol/L","3.0 mol/L","6.0 mol/L"],exp:"CO₂は1.32÷44=0.030mol。HClは係数比より0.060mol。20.0mL=0.0200Lなので、M=0.060÷0.0200=3.0mol/L。",final:true}]}];
let battleIndex=0,qIndex=0,selected=null,playerHp=100,misses=0,currentQuestions=[],bossHp=0,bossMax=0,answered=false,gameComplete=false;
function shuffle(a){return a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1])}
function startBattle(i){battleIndex=i;qIndex=0;selected=null;answered=false;const b=battles[i];currentQuestions=b.questions.map(q=>({...q,choices:shuffle(q.choices)}));bossHp=b.hp;bossMax=b.hp;chapterTitle.textContent=b.title;bossName.textContent=b.bossName;bossSub.textContent=b.bossSub;bossSpeech.textContent=b.bossName+"が あらわれた！";bossImg.src=b.bossImg;bossImg.alt=b.bossName;bossArt.classList.remove("defeated");loadQuestion();updateBars()}
function loadQuestion(){selected=null;answered=false;const q=currentQuestions[qIndex],b=battles[battleIndex];stagePill.textContent=`⚔ 連戦 ${battleIndex+1}/2`;qPill.textContent=`問題 ${qIndex+1}/${currentQuestions.length}`;questionTag.textContent=q.tag;questionNo.textContent=`問題 ${qIndex+1}`;questionText.textContent=q.q;dataBox.innerHTML=b.baseData.map(x=>`<div>${x}</div>`).join("");if(q.focus){focusBox.innerHTML=q.focus;focusBox.classList.add("show")}else{focusBox.innerHTML="";focusBox.classList.remove("show")}choices.innerHTML=q.choices.map((c,i)=>`<button class="choice" data-choice="${c}">${String.fromCharCode(65+i)}. ${c}</button>`).join("");document.querySelectorAll(".choice").forEach(btn=>btn.onclick=()=>{if(answered)return;document.querySelectorAll(".choice").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected");selected=btn.dataset.choice});resultBox.textContent="選択肢を選んで「こうげき！」を押そう。"}
function updateBars(){bossHpBar.style.width=`${Math.max(0,bossHp/bossMax*100)}%`;bossHpText.textContent=`${Math.max(0,bossHp)} / ${bossMax}`;playerHpBar.style.width=`${playerHp}%`;playerHpText.textContent=`${playerHp} / 100`;playerHpTop.textContent=`HP ${playerHp}/100`;missPill.textContent=`❤ ミス ${misses}/3`}

function playAttackEffect(isCritical, damage){
  const pop=document.getElementById("attackPop");
  const word=document.getElementById("attackWord");
  const dmg=document.getElementById("damagePop");
  if(pop){
    word.textContent=isCritical?"かいしん！":"いけっ！";
    pop.classList.remove("play");
    void pop.offsetWidth;
    pop.classList.add("play");
  }
  if(dmg){
    dmg.textContent=isCritical?"999 DAMAGE!!":`${damage} DAMAGE!`;
    dmg.classList.remove("play");
    void dmg.offsetWidth;
    dmg.classList.add("play");
  }
}
function playMissEffect(){
  const pc=document.querySelector(".player-card");
  if(pc){
    pc.classList.remove("missflash");
    void pc.offsetWidth;
    pc.classList.add("missflash");
  }
}

function attack(){if(answered)return;if(!selected){resultBox.innerHTML="先に選択肢を選ぼう。";return}const q=currentQuestions[qIndex];document.querySelectorAll(".choice").forEach(btn=>{if(btn.dataset.choice===q.a)btn.classList.add("correct");if(btn.dataset.choice===selected&&selected!==q.a)btn.classList.add("wrong")});answered=true;if(selected===q.a){const damage=q.final?999:40;bossHp=Math.max(0,bossHp-damage);playAttackEffect(q.final,damage);bossArt.classList.add("hit","blast");setTimeout(()=>bossArt.classList.remove("hit","blast"),460);document.body.classList.add("flash");setTimeout(()=>document.body.classList.remove("flash"),700);resultBox.innerHTML=`<strong>${q.final?"かいしんのいちげき！":"正解！"}</strong><br>${damage}ダメージ！<br><br>${q.exp}`}else{misses++;playerHp=Math.max(0,playerHp-34);playMissEffect();currentQuestions[qIndex].choices=shuffle(currentQuestions[qIndex].choices);resultBox.innerHTML=`<strong>攻撃失敗！</strong><br>同じ問題にもう一度挑戦しよう。<br><br>${q.exp}`;if(misses>=3)showModal("敗北…","HPが尽きた。リセットしてもう一度挑戦しよう。<br><br><button class='action' onclick='resetGame()'>リセットして再挑戦</button>","つづける")}updateBars();if(bossHp<=0){bossArt.classList.add("defeated");if(battleIndex===0){gameComplete=false;showModal("LEVEL UP!","熱分解スライムをたおした！<br>化学反応式 Lv.1 → Lv.2<br>次は CaCO₃ゴーレムだ！","つづける")}else{gameComplete=true;showModal("MISSION COMPLETE!","CaCO₃ゴーレムをたおした！<br>未知の塩酸の濃度を攻略した！<br><br>🏆 実験まとめ COMPLETE","トップに戻る")}}}
function next(){if(misses>=3)return;if(!answered){resultBox.innerHTML="先に攻撃して、解説を確認しよう。";return}if(bossHp<=0){if(battleIndex===0){closeModal();startBattle(1);return}return}const q=currentQuestions[qIndex];if(selected!==q.a){loadQuestion();return}qIndex=(qIndex+1)%currentQuestions.length;loadQuestion()}
function showHint(){hintText.textContent=currentQuestions[qIndex].hint||"実験データをよく見るのじゃ。";hintOverlay.style.display="flex"}function closeHint(){hintOverlay.style.display="none"}
function showModal(t,txt,btn){modalTitle.innerHTML=t;modalText.innerHTML=txt;modalButton.textContent=btn||"つづける";overlay.style.display="flex"}function closeModal(){overlay.style.display="none";if(gameComplete)topReturn()}function topReturn(){gameComplete=false;titleScreen.classList.remove("hide")}function resetGame(){closeModal();battleIndex=0;playerHp=100;misses=0;gameComplete=false;startBattle(0)}function startGame(){const n=(document.getElementById("playerNameInput").value||"").trim()||"科学者";document.getElementById("playerNameLabel").textContent=n;titleScreen.classList.add("hide");battleIndex=0;playerHp=100;misses=0;gameComplete=false;startBattle(0)}
startBtn.onclick=startGame;attackBtn.onclick=attack;hintBtn.onclick=showHint;nextBtn.onclick=next;resetBtn.onclick=resetGame;startBattle(0);
