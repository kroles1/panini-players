describe("valid register", () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it("opens the home page successfully", () => {
    cy.visit('http://localhost:3000/')
  })

  it("registers an account", () => {
    cy.get('.registerNav').click()
    cy.get('[name="username"]').type("test")
    cy.get('[name="email"]').type("test@test.com")
    cy.get('[name="location"]').select("London")
    cy.get('[name="password_1"]').type("password")
    cy.get('[name="password_2"]').type("password")
    cy.get('[type="submit"]').click()

    cy.window()
      .its('console')
      .then((console) => {
        cy.spy(console, 'log').as('log')
      })

    cy.get('@log')
      .invoke('getCalls')
      .then((calls) => {
        console.table(calls)
      })
      .each((call) => {
        call.args.forEach((arg) => {
          expect(arg).to.contain('REGISTRATION SUCCESSFULL')
        })
      })

    cy.location('pathname').should('eq', '/')
  })
})

describe("invalid register", () => {

  beforeEach(() => {
    cy.viewport(1600, 900)
  })

  it("opens the home page successfully", () => {
    cy.visit('http://localhost:3000/')
  })

  it("fails to register if form is incomplete", () => {
    cy.get('.registerNav').click()
    cy.get('[name="username"]').type("test4")
    cy.get('[name="email"]').type("test4@test.com")
    cy.get('[name="location"]').select("London")
    cy.get('[name="password_1"]').type("password")
    cy.get('[name="password_2"]').type("password1")
    cy.get('[type="submit"]').click()

    cy.request({
      method: 'POST',
      url: 'http://127.0.0.1:5000/register',
      failOnStatusCode: false,
    }).should((response) => {
      expect(response.status).to.eq(400)
    })

    cy.window()
      .its('console')
      .then((console) => {
        cy.spy(console, 'log').as('log')
      })

    cy.get('@log')
      .invoke('getCalls')
      .then((calls) => {
        console.table(calls)
      })
      .each((call) => {
        call.args.forEach((arg) => {
          expect(arg).to.contain('REGISTRATION FAILED')
        })
      })
  })
})


describe("invalid login", () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it("opens the home page successfully", () => {
    cy.visit('http://localhost:3000/')
  })

  it("login fails", () => {
    cy.get('[name="username"]').type("George")
    cy.get('[name="password"]').type("incorrect")
    cy.get('.submitBtn').click()

    cy.request({
      method: 'POST',
      url: 'http://127.0.0.1:5000/login',
      failOnStatusCode: false,
    }).should((response) => {
      expect(response.status).to.eq(400)
    })

    cy.window()
      .its('console')
      .then((console) => {
        cy.spy(console, 'log').as('log')
      })

    cy.get('@log')
      .invoke('getCalls')
      .then((calls) => {
        console.table(calls)
      })
      .each((call) => {
        call.args.forEach((arg) => {
          expect(arg).to.contain('FAILED')
        })
      })
  })

})


describe("valid login", () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it("opens the home page successfully", () => {
    cy.visit('http://localhost:3000/')
  })

  it("logs in", () => {
    cy.get('[name="username"]').type("test")
    cy.get('[name="password"]').type("password")
    cy.get('.submitBtn').click()

    cy.location('pathname').should('eq', '/dashboard/album')
  })

})


describe("render profile page", () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it('opens the profile page successfully', () => {
    cy.get('[href="/dashboard/profile"]').click()
  })

  it("displays user's account details", () => {
    cy.get('.profileValues > :nth-child(1)').contains('test')
    cy.get('select').contains('London')
  })

  it('navigate back to dashboard', () => {
    cy.get('[href="/dashboard/album"]').click()
  })
})


describe("render album page", () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it("renders correct stickers on selecting new country", () => {
    cy.get('select').select('Ecuador')
    cy.get('.stickers > :nth-child(1)').contains('ECU1')
  })

  it('navigate back to dashboard', () => {
    cy.get('[href="/dashboard/album"]').click()
  })
})


describe("add stickers", () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it("add sticker button navigates to add sticker page", () => {
    cy.get('.albumTop > :nth-child(2)').click()
    cy.get('.add-sticker-btn').should('be.visible')
  })

  it("sticker can be added to collection", () => {
    cy.get('[type="text"]').type('QAT1')
    cy.get('[type="submit"]').click()
    cy.get('p').should('contain', 'Sticker Added')
    cy.get('[href="/dashboard/album"]').click()
    cy.get('.albumTop > :nth-child(2)').click()
    cy.get('[type="text"]').type('QAT1')
    cy.get('[type="submit"]').click()
    cy.get('p').should('contain', 'Sticker Added')
    cy.get('[href="/dashboard/album"]').click()
    cy.get(':nth-child(1) > div > img').should('not.have.class', 'stickerHidden')
  })

  it('navigate back to dashboard', () => {
    cy.get('[href="/dashboard/album"]').click()
  })
})


describe("trade stickers", () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it("add sticker button navigates to add sticker page", () => {
    cy.get('.albumTop > :nth-child(2)').click()
    cy.get('[type="submit"]').should('be.visible')
  })

  it("sticker can be added to collection", () => {
    cy.get('[type="text"]').type('QAT1')
    cy.get('[type="submit"]').click()
    cy.get('p').should('contain', 'Sticker Added')
    cy.get('[href="/dashboard/album"]').click()
    cy.get(':nth-child(1) > div > img').should('not.have.class', 'stickerHidden')
  })

  it('navigate back to dashboard', () => {
    cy.get('[href="/dashboard/album"]').click()
  })

  it("trades can be made", () => {
    cy.get('.albumTop > :nth-child(1)').click()
    cy.get('[placeholder="Sticker Id traded"]').should('be.visible')
    cy.get('[placeholder="Sticker Id received"]').should('be.visible')
    cy.get('[placeholder="Sticker Id traded"]').type('QAT1')
    cy.get('[placeholder="Sticker Id received"]').type('QAT2')
    cy.get('[type="submit"]').click()
    cy.get('p').should('contain', 'Trade confirmed')
    cy.get('[href="/dashboard/album"]').click()
    cy.get(':nth-child(2) > div > img').should('not.have.class', 'stickerHidden')
  })

  it('navigate back to dashboard', () => {
    cy.get('[href="/dashboard/album"]').click()
  })

})


describe('render friends list', () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it('navigate to friends list', () => {
    cy.get('[href="/dashboard/friends"]').click()
    cy.get('.friendHeader').should('contain', 'Friend List')
  })

})


describe('add friend/request trade', () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it('navigate to add friend component', () => {
    cy.get('.addFriendBtn').click()
  })

  it('add friend after entering user id', () => {
    cy.get('[type="text"]').type('l36pnqkvl6')
    cy.get('[type="submit"]').click()
    cy.get('p').should('contain', 'Friend Added')
  })

  it('check friends list has been updated', () => {
    cy.get('[href="/dashboard/friends"]').click()
    cy.get('h2').should('contain', 'George')
  })

  it('render friend page', () => {
    cy.get('.renderFriends > :nth-child(1)').click()
    cy.get('h1').should('contain', 'George')
  })

  it('render cards that can be given/received', () => {
    cy.get('#root > :nth-child(4)').should('contain', "QAT1")
    cy.get('#root > :nth-child(6)').should('contain', "00")
  })

  it('start trade with friend', () => {
    cy.get('button').click()
    cy.get('p').should('contain', 'User notified')
  })
})


describe('public trades', () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it('navigate to public trades page', () => {
    cy.get('[href="/dashboard/public"]').click()
    cy.get('.location').contains('Location: London')
  })

  it('open public user profile', () => {
    cy.get(':nth-child(1) > div > .publicUsername').click()
    cy.get('h1').should('contain', 'Sean')
    cy.get('p').should('contain', 'QAT1')
  })

})


describe('chat feature', () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
  });

  it('navigate back to public trade page', () => {
    cy.get('[href="/dashboard/public"]').click()
  })

  it('test chat button', () => {
    cy.get('.chatBtn').click()
    cy.get('input').should('be.visible')
    cy.get('.line > div > button').should('be.visible')
  })

  it('send global chat message', () => {
    cy.get('input').type('hello')
    cy.get('.line > div > button').click()
    cy.get('li').should('be.visible')
    cy.get('li').should('contain', 'hello')
  })

})