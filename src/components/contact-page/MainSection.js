import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 40px 20px 0px 20px;
    min-height: calc(100vh - 80px);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    //   border: 2px solid orange;

    @media (min-width: 768px) {
        padding: 0px 80px 0px 80px;
    }

    @media (min-width: 1024px) {
        padding-top: 80px;
        padding-left: 144px;
        padding-right: 144px;
    }
`

const Form = styled.form`
    margin: 0px;
    padding: 20px 0px 20px 0px;
    grid-column: 1 / 13;
    // border: 2px solid dodgerblue;

    @media (min-width: 768px) {
        grid-column: 3 / 11;
    }

    @media (min-width: 1024px) {
        grid-column: 3 / 11;
    }

    @media (min-width: 1200px) {
        grid-column: 4 / 10;
    }
`

const Label = styled.label`
    margin: 0px;
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #586165;
    // border: 1px dashed green;
`

const Textarea = styled.textarea`
    box-sizing: border-box;
    margin-top: 16px;
    padding: 10px 12px 10px 12px;
    width: 100%;
    height: 240px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #586165;
    resize: none;
    background: #fbfcfb;
    border-radius: 0px;
    border: 1px solid rgba(40, 42, 43, 0.2);
    outline: none;
`

const StyledLabel = styled(Label)`
    margin-top: 32px;
    margin-bottom: 16px;
    // border: 1px dashed green;
`

const StyledButton = styled.button`
    margin-top: 20px;
`

export default function MainSection() {
    function handleButtonClick(e) {
        e.preventDefault()
        alert('button has been fired')
    }

    return (
        <StyledSection>
            <Form>
                <Label for={'messageTextArea'}>Hey Stedman,</Label>
                <Textarea id={'messageTextArea'} name={'messageTextArea'} placeholder={'Write your message here...'} />
                <StyledLabel>Regards,</StyledLabel>
                <input placeholder='Your name' />
                <input placeholder='Your email' className={'mt-12px'} />
                <StyledButton onClick={(e) => handleButtonClick(e)}>Send email</StyledButton>
            </Form>
        </StyledSection>
    )
}
