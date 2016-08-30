const agents = {
  enhancements: {
    afriendininnercircle:{
      acknowledgement: {
        button: `Ok`,
        text: `<div id='EnhancementTalkAcknowledgement'>
          A mission Friend in Inner Circle has been unlocked.
        </div>`
      },
      choice: {
        button1: `Yes`,
        button2: `No`,
        text: `<div id='EnhancementTalkChoice'>There's a guild of sort, that
          serves as platform for communication for parties like ourselves, through
          which many things can be settled. I can contact them to provide us with that
          access, if you will?</div>`
      },
      dialog: {
        button: `What would that be?`,
        text: `<div id='EnhancementTalkDialog'>Seeing how we're doing in our operations,
          perhaps it is time, to let you in on something.</div>`
      }
    },
    anolddebt: {
      acknowledgement: {
        button: `Ok`,
        text: `<div id='EnhancementTalkAcknowledgement'>Mission An Old Debt has become
          available.</div>`
      },
      choice: {
        button1: `Yes`,
        button2: `No`,
        text: `<div id='EnhancementTalkChoice'>So sometimes before we met some
          fatal bad luck it is good to have some things taken care of. Would you
          want to assist your agents with that?</div>`
      },
      dialog: {
        button: `Probably not ...`,
        text: `<div id='EnhancementTalkDialog'>
          Given the nature of our work really, we can't really expect to live long,
          can we?
        </div>`
      }
    },
    bankrobbery: {
      acknowledgement: {
        button: `Ok`,
        text: `<div id='EnhancementTalkAcknowledgement'>Ok, let's do the bank job.
          I can't wait!</div>`
      },
      choice: {
        button1: `Sounds fine`,
        button2: `No`,
        text: `<div id='EnhancementTalkChoice'>How about we do something that gives us
          a shit load of money and no excuse, no stealthy shit - just kicking some
          ass in prime time, fuck the consequences! What dayya say, boss?</div>`
      },
      dialog: {
        button: `What?`,
        text: `<div id='EnhancementTalkDialog'>Hey boss, you know what would be really cool?
          (Follows mission that is essential to finishing dolce vita campaign.)
          </div>`
      }
    },
    destroyevidence: {
      acknowledgement: {
        button: `Ok`,
        text: `<div id='EnhancementTalkAcknowledgement'>
          Mission Destroy Evidence has become available.
        </div>`
      },
      choice: {
        button1: `Do it!`,
        button2: `Not now`,
        text: `<div id='EnhancementTalkChoice'>
          We should take care of stores having physical and
          electronic evidence about our doings. I found a way - a bit of resource,
          *puff and smoke, we make them disappear. Isn't it marvelous?</div>`
      },
      dialog: {
        button: `So?`,
        text: `<div id='EnhancementTalkDialog'>I am worried, boss, we are leaving too much
          of a trail behind us.</div>`
      }
    },
    prisonbreak: {
      acknowledgement: {
        button: `Good!`,
        text: `Mission Prison Break is available`
      },
      choice: {
        button1: `Let's do that`,
        button2: `Maybe later`,
        text: `After some planning and surprise action, we can proceed with an escape plan
          for the agent now in custody.`
      },
      dialog: {
        button: `What can be done?`,
        text: `Someone fucked up, or had a bad luck and now rots in prison.`
      }
    },
    silencewitness: {
      acknowledgement: {
        button: `Ok`,
        text: `<div id='EnhancementTalkAcknowledgement'>Silence Witness mission has become available.</div>`
      },
      choice: {
        button1: `Accidents happen...`,
        button2: `No`,
        text: `<div id='EnhancementTalkChoice'>How about I find some way to "persuade" her
          to keep the mouth shut. I have to use only loyal agents or myself for that.
          Others should not know about it.</div>`
      },
      dialog: {
        button: `Let's see`,
        text: `<div id='EnhancementTalkDialog'>To yourself - this situation of having
          an agent in prison is really unfortunate - he could talk.</div>`
      }
    }
  },
  olddebt: {
    generic: `<div id='OldDebtTalk'>generic old debt</div>`,
    miyako: `<div id='OldDebtTalk'>miyako's old debt</div>`,
    sanya: `<div id='OldDebtTalk'>sanya's old debt</div>`
  },
  talk: {
    cheeky: `What's up? - Did someone stole you a sweet roll?`,
    dead: `... who is it, lurking in the shadows??`,
    evasive: `I have this thing ..., never mind, what was it you wanted?`,
    intimate: `Aww, you woke me up - is something going on?`,
    prison: `I don't want spend rest of my life here. Get me out!`,
    self: `I should do something ... better think it through first.`,
    soldiery: `Yes boss? I stand ready.`,
    tired: {
      cheeky: `(Tired)Not in the shape - nor mood, really.`,
      evasive: `(Tired)Excuse me!`,
      intimate: `(Tired)Sorry, boss. I need to tank fuel.`,
      self: `(Tired)The last mission was more difficult than I expected ...`,
      soldiery: `(Tired)Of course, just let me catch a breath!`
    }
  }
};

export default agents;
