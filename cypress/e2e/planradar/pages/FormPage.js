class FormPage{
    //sellect close
    closeF(){
        return cy.get('button[data-id="Setup_Forms_Capabilities_Back"]')
    }
    //form selector
    formB(){
        return cy.get('div.planradar-sidebar-item:nth-of-type(7)')
    }
    //form title selector
    formT(){
        cy.get('.ui-btn-title.whitespace-nowrap').click()
        return cy.get('.flex.align-center.mb-5')
    }
    //form title save button sellector
    formNsave(){
        return cy.get('[data-id="Setup_Forms_FormName_Save"]')
    }
    //form description selector
    formD(){
        cy.get('div[data-id="Setup_Forms_FormDescription_Edit"]').click({force : true})
        return cy.get('input[data-id="Setup_Forms_FormDescription"]')
    }
    //form description save button selector
    formDsave(){
        return cy.get('div[data-id="Setup_Forms_FormDescription_Save"]')
    }
    //short text input type selector
    shortItype(){
        return cy.get('div[data-rbd-draggable-id="short-text"]')
    }
    //long text input type selector
    longItype(){
        return cy.get('div[data-rbd-draggable-id="long-text"]')
    } 
    //date input type selector
    dateItype(){
        return cy.get('div[data-rbd-draggable-id="date"]')
    }
    //list input type selector
    listItype(){
        return cy.get('div[data-rbd-draggable-id="list"]')
    }
    //title input type default value selector
    titleItypeDvalue(){
        cy.get('div[data-index="0"]').click()
        return cy.get('input[data-id="Setup_Forms_Title_DefaultValue"]')
    }
    //title input type is mandatory selectot
    titleInputMfield(){
        return cy.get('input[name="required"]')
    }
    //save form button selector
    saveFbutton(){
        return cy.get('button[data-id="setup_forms_save"]')
    }
    // this method to create form with title, short text, long text, date, list inputs and with title input default value and mandatory title input
    createF(FormName,FormDescription,ElementDefaultValue){
        this.formB().click()
        this.formT().type(FormName)
        this.formNsave().click()
        this.formD().type(FormDescription)
        this.formDsave().click()
        this.shortItype().click()
        this.longItype().click()
        this.dateItype().click()
        this.listItype().click()
        this.titleItypeDvalue().type(ElementDefaultValue)
        this.titleInputMfield().click()
        this.saveFbutton().click()
        cy.wait(1000)
        this.closeF().click()
    }
 
  
  
  }
  export default FormPage