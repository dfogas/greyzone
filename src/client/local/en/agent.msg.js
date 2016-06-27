const agents = {
  olddebt: {
    generic: `<div id='OldDebtTalk'>generic old debt</div>`,
    miyako: `<div id='OldDebtTalk'>miyako's old debt</div>`,
    sanya: `<div id='OldDebtTalk'>sanya's old debt</div>`
  },
  talk: {
    cheeky: `<div id='AgentTalk'>What's up? - Did someone stole you a sweet roll?</div>`,
    evasive: `<div id='AgentTalk'>I have this thing ..., never mind, what was it you wanted?</div>`,
    intimate: `<div id='AgentTalk'>Aww, you woke me up - is something going on?</div>`,
    self: `<div id='AgentTalk'>I should do something ... better think it through first.</div>`,
    soldiery: `<div id='AgentTalk'>Yes boss? I stand ready.</div>`,
    tired: {
      cheeky: `<div id='AgentTalk'>Not in the shape - nor mood, really.</div>`,
      evasive: `<div id='AgentTalk'>Excuse me!</div>`,
      intimate: `<div id='AgentTalk'>Sorry, boss. I need to tank fuel.</div>`,
      self: `<div id='AgentTalk'>The last mission was more difficult than I expected ...</div>`,
      soldiery: `<div id='AgentTalk'>Of course, just let me catch a breath!</div>`
    }
  }
};

export default agents;
