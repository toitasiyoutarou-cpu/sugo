const battles = [
  {
    title:"第1戦：熱分解スライム",
    bossName:"熱分解スライム",
    bossSub:"質量から熱分解式を見抜け。",
    bossImg:"img/slime.png",
    hp:200,
    questions:[
      {tag:"物質量", data:["NaHCO₃=84","加熱前 8.4g","n=m/M"], q:"NaHCO₃を8.4g加熱した。NaHCO₃の物質量は？", a:"0.10 mol", choices:["0.10 mol","1.0 mol","0.084 mol","8.4 mol"], exp:"NaHCO₃の式量は84。8.4÷84=0.10mol。"},
      {tag:"理論値", data:["NaHCO₃ 0.10mol","係数比 2:1","Na₂CO₃ ?"], q:"反応式(b)なら、0.10molのNaHCO₃からNa₂CO₃は何molできる？", a:"0.050 mol", choices:["0.050 mol","0.10 mol","0.20 mol","0.0050 mol"], exp:"係数比は NaHCO₃:Na₂CO₃=2:1。0.10molの半分、0.050molのNa₂CO₃ができる。"},
      {tag:"質量", data:["Na₂CO₃=106","0.050mol","m=nM"], q:"0.050molのNa₂CO₃の質量は？", a:"5.3 g", choices:["5.3 g","10.6 g","4.0 g","6.2 g"], exp:"0.050×106=5.3g。実験値と近いなら、(b)を支持する証拠になる。"},
      {tag:"考察", data:["実測値 約5.3g","理論値と比較","根拠を示す"], q:"質量の比較だけで反応式を考えるとき、一番大切なのはどれ？", a:"候補ごとの理論値と実測値を比べること", choices:["候補ごとの理論値と実測値を比べること","見た目の色だけで判断すること","加熱時間だけで決めること","気体が出たら全部同じ反応と考えること"], exp:"候補ごとの理論値を計算し、実測値と比較することで、実験データが証拠になる。"},
      {tag:"FINAL", data:["実測値 約5.3g","Na₂CO₃なら5.3g","結論を選べ"], q:"結論として、実験で残った白色固体の質量が約5.3gだった。最も適切な化学反応式はどれ？", a:"(b) 2NaHCO₃→Na₂CO₃+H₂O+CO₂", choices:["(a) NaHCO₃→NaOH+CO₂","(b) 2NaHCO₃→Na₂CO₃+H₂O+CO₂","(c) 2NaHCO₃→Na₂O+H₂O+2CO₂"], exp:"実測値約5.3gと理論値が一致するのは(b)。よって、2NaHCO₃→Na₂CO₃+H₂O+CO₂ と考えられる。", final:true}
    ]
  },
  {
    title:"第2戦：CaCO₃ゴーレム",
    bossName:"CaCO₃ゴーレム",
    bossSub:"未知の塩酸濃度を攻略せよ。",
    bossImg:"img/golem.png",
    hp:240,
    questions:[
      {tag:"原点", data:["CaCO₃=0g","CO₂=0","(0,0)"], q:"CaCO₃をまったく加えないとCO₂は発生しない。このとき近似線は？", a:"原点(0,0)を通る線として考える", choices:["原点(0,0)を通る線として考える","原点を通らない線にする","横軸と平行な線にする","グラフは描けない"], exp:"CaCO₃が0ならCO₂も0。最初の直線部分は原点を通ると考えるのが自然。"},
      {tag:"モデル", data:["最初は増加","途中から一定","2本の直線"], q:"CaCO₃を増やすとCO₂は最初増えるが、途中から増えなくなる。最も適切なモデルは？", a:"二本の直線で近似する", choices:["二本の直線で近似する","一本の曲線で近似する","最後まで一本の直線で増え続ける","点を結ばず考えない"], exp:"最初はCaCO₃が不足。途中からHClが不足し、CO₂発生量が頭打ちになる。"},
      {tag:"折れ曲がり", data:["CaCO₃を追加","CO₂が増えない","HCl不足"], q:"CO₂の発生量が途中から増えなくなる理由は？", a:"HClが不足し、CaCO₃を増やしても反応が進まなくなるから", choices:["HClが不足し、CaCO₃を増やしても反応が進まなくなるから","CaCO₃が途中で増えなくなるから","CO₂の式量が変わるから","反応式の係数が途中で変わるから"], exp:"相手であるHClが不足すると、CaCO₃を増やしても反応は進まない。"},
      {tag:"交点", data:["折れ曲がる点","過不足なし","ここを読む"], q:"グラフの折れ曲がる点・交点は何を意味する？", a:"HClとCaCO₃が過不足なく反応する点", choices:["HClとCaCO₃が過不足なく反応する点","反応が始まる点","CO₂が水に全部溶けた点","測定ミスだけを表す点"], exp:"交点はHClがちょうど使い切られる点。ここから濃度計算へ進める。"},
      {tag:"CaCO₃量", data:["CaCO₃=100","3.0g","n=m/M"], q:"20mLの塩酸と過不足なく反応するCaCO₃は3.0gだった。CaCO₃の物質量は？", a:"0.030 mol", choices:["0.030 mol","0.30 mol","0.015 mol","0.060 mol"], exp:"CaCO₃=100なので、3.0÷100=0.030mol。"},
      {tag:"HCl量", data:["CaCO₃ 0.030mol","係数比 1:2","HCl ?"], q:"CaCO₃が0.030mol過不足なく反応した。HClの物質量は？", a:"0.060 mol", choices:["0.060 mol","0.030 mol","0.015 mol","0.090 mol"], exp:"CaCO₃:HCl=1:2。CaCO₃が0.030molなら、HClは0.060mol。"},
      {tag:"FINAL", data:["HCl 0.060mol","20.0mL=0.0200L","M=n/V"], q:"20.0mLの塩酸中にHClが0.060mol含まれていた。この塩酸のモル濃度 M は？", a:"3.0 mol/L", choices:["3.0 mol/L","0.30 mol/L","1.5 mol/L","0.060 mol/L"], exp:"20.0mL=0.0200L。M=0.060÷0.0200=3.0mol/L。", final:true}
    ]
  }
];

let battleIndex=0, qIndex=0, selected=null, playerHp=100, misses=0;
let currentQuestions=[], bossHp=0, bossMax=0, answered=false;

function shuffle(arr){return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);}

function startBattle(i){
  battleIndex=i; qIndex=0; selected=null; answered=false;
  const b=battles[i];
  currentQuestions=b.questions.map(q=>({...q, choices:shuffle(q.choices)}));
  bossHp=b.hp; bossMax=b.hp;
  document.getElementById("chapterTitle").textContent=b.title;
  document.getElementById("bossName").textContent=b.bossName;
  document.getElementById("bossSub").textContent=b.bossSub;
  document.getElementById("bossSpeech").textContent=b.bossName+"が あらわれた！";
  document.getElementById("bossImg").src=b.bossImg;
  document.getElementById("bossImg").alt=b.bossName;
  document.getElementById("bossArt").classList.remove("defeated");
  loadQuestion();
  updateBars();
}

function loadQuestion(){
  selected=null; answered=false;
  const q=currentQuestions[qIndex];
  document.getElementById("stagePill").textContent=`⚔ 連戦 ${battleIndex+1}/2`;
  document.getElementById("qPill").textContent=`問題 ${qIndex+1}/${currentQuestions.length}`;
  document.getElementById("questionTag").textContent=q.tag;
  document.getElementById("questionNo").textContent=`問題 ${qIndex+1}`;
  document.getElementById("questionText").textContent=q.q;
  document.getElementById("dataBox").innerHTML=(q.data||[]).map(x=>`<div>${x}</div>`).join("");
  document.getElementById("choices").innerHTML=q.choices.map((c,idx)=>`<button class="choice" data-choice="${c}">${String.fromCharCode(65+idx)}. ${c}</button>`).join("");
  document.querySelectorAll(".choice").forEach(btn=>{
    btn.onclick=()=>{
      if(answered) return;
      document.querySelectorAll(".choice").forEach(b=>b.classList.remove("selected"));
      btn.classList.add("selected");
      selected=btn.dataset.choice;
    };
  });
  document.getElementById("resultBox").textContent="選択肢を選んで「こうげき！」を押そう。";
}

function updateBars(){
  document.getElementById("bossHpBar").style.width=`${Math.max(0,bossHp/bossMax*100)}%`;
  document.getElementById("bossHpText").textContent=`${Math.max(0,bossHp)} / ${bossMax}`;
  document.getElementById("playerHpBar").style.width=`${playerHp}%`;
  document.getElementById("playerHpText").textContent=`${playerHp} / 100`;
  document.getElementById("playerHpTop").textContent=`HP ${playerHp}/100`;
  document.getElementById("missPill").textContent=`❤ ミス ${misses}/3`;
}

function attack(){
  if(answered) return;
  if(!selected){document.getElementById("resultBox").innerHTML="先に選択肢を選ぼう。";return;}
  const q=currentQuestions[qIndex];
  document.querySelectorAll(".choice").forEach(btn=>{
    if(btn.dataset.choice===q.a) btn.classList.add("correct");
    if(btn.dataset.choice===selected && selected!==q.a) btn.classList.add("wrong");
  });
  answered=true;

  if(selected===q.a){
    const damage=q.final?999:40;
    bossHp=Math.max(0,bossHp-damage);
    const art=document.getElementById("bossArt");
    art.classList.add("hit"); setTimeout(()=>art.classList.remove("hit"),360);
    document.body.classList.add("flash"); setTimeout(()=>document.body.classList.remove("flash"),700);
    document.getElementById("resultBox").innerHTML=`<strong>${q.final?"かいしんのいちげき！":"正解！"}</strong><br>${damage}ダメージ！<br><br>${q.exp}`;
  }else{
    misses++; playerHp=Math.max(0,playerHp-34);
    currentQuestions[qIndex].choices=shuffle(currentQuestions[qIndex].choices);
    document.getElementById("resultBox").innerHTML=`<strong>攻撃失敗！</strong><br>同じ問題にもう一度挑戦しよう。<br><br>${q.exp}`;
    if(misses>=3) showModal("敗北…","HPが尽きた。リセットしてもう一度挑戦しよう。<br><br><button class='action' onclick='resetGame()'>リセットして再挑戦</button>");
  }
  updateBars();

  if(bossHp<=0){
    document.getElementById("bossArt").classList.add("defeated");
    if(battleIndex===0){
      showModal("LEVEL UP!","熱分解スライムをたおした！<br>化学反応式 Lv.1 → Lv.2<br>次は CaCO₃ゴーレムだ！");
    }else{
      showModal("MISSION COMPLETE!","CaCO₃ゴーレムをたおした！<br>未知の塩酸の濃度を攻略した！");
    }
  }
}

function next(){
  if(misses>=3) return;
  if(!answered){document.getElementById("resultBox").innerHTML="先に攻撃して、解説を確認しよう。";return;}
  if(bossHp<=0){
    if(battleIndex===0){closeModal();startBattle(1);return;}
    return;
  }
  const q=currentQuestions[qIndex];
  if(selected!==q.a){loadQuestion();return;}
  qIndex=(qIndex+1)%currentQuestions.length;
  loadQuestion();
}

function showModal(title,text){
  document.getElementById("modalTitle").innerHTML=title;
  document.getElementById("modalText").innerHTML=text;
  document.getElementById("overlay").style.display="flex";
}
function closeModal(){document.getElementById("overlay").style.display="none";}
function resetGame(){closeModal();battleIndex=0;playerHp=100;misses=0;startBattle(0);}

document.getElementById("attackBtn").onclick=attack;
document.getElementById("nextBtn").onclick=next;
document.getElementById("resetBtn").onclick=resetGame;
startBattle(0);
