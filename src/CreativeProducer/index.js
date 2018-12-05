import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import {
    isMobile
  } from "react-device-detect";
import './index.css';


const Person = ({ name, imageUrl, description, facebookLink, instagramLink, overwittenStyles }) =>
    <div
        style={ overwittenStyles || {
            minHeight           : '800px',
            maxHeight           : '65vh',
            background          : '#DBECEC11',
            margin              : '20px',
            textAlign           : 'center',
            borderRadius        : '10px',
            boxShadow           : 'rgba(4, 6, 4, 0.15) 0px 0px 48px 0px',

        }}
    >
        <div
            style={{
                textAlign       : 'center',
                marginBottom    : '-20px',
            }}
        >
            <a href={ facebookLink } target='_blank' rel="noopener noreferrer">
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 612 612"
                    style={{
                        margin: '5px',
                    }}
                >
                    <path d="M612,306C612,137.004,474.995,0,306,0C137.004,0,0,137.004,0,306c0,168.995,137.004,306,306,306
                        C474.995,612,612,474.995,612,306z M27.818,306C27.818,152.36,152.36,27.818,306,27.818S584.182,152.36,584.182,306
                        S459.64,584.182,306,584.182S27.818,459.64,27.818,306z"/>
                    <path d="M317.739,482.617V306h58.279l9.208-58.529h-67.487v-29.348c0-15.272,5.007-29.849,26.928-29.849h43.813v-58.418h-62.201
                        c-52.298,0-66.569,34.438-66.569,82.175v35.413h-35.885V306h35.885v176.617H317.739L317.739,482.617z"/>
                </svg>
            </a>
            <a href={ instagramLink } target='_blank' rel="noopener noreferrer">
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 612 612"
                    style={{
                        margin: '5px',
                    }}
                >
                    <path d="M513.381,84.865h-56.158c-18.346,0-33.281,14.936-33.281,33.281v56.144c0,18.345,14.936,33.281,33.281,33.281h56.158
                    c18.345,0,33.281-14.936,33.281-33.281v-56.144C546.662,99.8,531.726,84.865,513.381,84.865z M517.519,174.29
                    c0,2.288-1.851,4.138-4.138,4.138h-56.158c-2.288,0-4.139-1.851-4.139-4.138v-56.144c0-2.288,1.865-4.138,4.139-4.138h56.158
                    c2.272,0,4.138,1.851,4.138,4.138V174.29z M480.857,7.286H131.143C58.839,7.286,0,66.125,0,138.429v335.142
                    c0,72.305,58.839,131.143,131.143,131.143h349.714C553.16,604.714,612,545.876,612,473.571V138.429
                    C612,66.125,553.16,7.286,480.857,7.286z M582.857,473.571c0,56.246-45.755,102-102,102H131.143c-56.246,0-102-45.754-102-102
                    V255h146.895c-27.802,30.979-44.895,71.764-44.895,116.571c0,96.42,78.438,174.857,174.857,174.857
                    s174.857-78.438,174.857-174.857c0-44.807-17.093-85.592-44.895-116.571h146.895V473.571z M306,225.857
                    c80.347,0,145.714,65.368,145.714,145.714c0,80.348-65.367,145.715-145.714,145.715s-145.714-65.367-145.714-145.715
                    C160.286,291.225,225.653,225.857,306,225.857z M582.857,225.857H402.448c-27.671-18.375-60.807-29.143-96.448-29.143
                    c-35.627,0-68.777,10.768-96.448,29.143H29.143v-87.428c0-56.246,45.754-102,102-102h349.714c56.245,0,102,45.754,102,102
                    V225.857z M306,473.571c56.246,0,102-45.754,102-102c0-56.244-45.754-102-102-102c-56.246,0-102,45.755-102,102
                    C204,427.817,249.754,473.571,306,473.571z M306,298.715c40.174,0,72.857,32.685,72.857,72.856
                    c0,40.174-32.684,72.857-72.857,72.857c-40.173,0-72.857-32.684-72.857-72.857C233.143,331.399,265.827,298.715,306,298.715z"/>
                </svg>
            </a>
        </div>
        <div
            style={{
                maxHeight              : '300px',
            }}
        >
            <img
                src={ imageUrl }
                alt={ name }
                style={{
                    width               : 'auto',
                    maxWidth            : '100%',
                    margin              : '0 auto',
                    clipPath            : 'circle(40%)',
                }}
            />
        </div>
        <h1
            style={{
                color           : 'rgb(148, 148, 148)',
                fontFamily      : "'Libre Baskerville', serif",
                fontWeight      : 700,
                textTransform   : 'uppercase',
                marginTop       : 'calc( 25px + 4vw )',
            }}
        >
            { name }
        </h1>
        <p
            style={{
                padding             : '10px',
                lineHeight          : '22px',
            }}
        >
            { description }
        </p>

    </div>

export default class CreativeProducer extends Component {
    render() {

        if (this.props.Producers && this.props.Producers.length>0 )
        return (
                <Carousel
                    style                       = {{
                        marginTop               : '50px',
                    }}
                    heightMode                  = 'max'
                    initialSlideHeight          = { 500 }
                    slidesToShow                = { isMobile ? 1 : 4 }
                    slidesToScroll              = { 1 }
                    cellAlign                   = 'center'
                    wrapAround                  = { true }
                    autoplay                    = { true }
                    renderCenterLeftControls    = {({ previousSlide }) => (
                        <button
                            onClick={ previousSlide }
                            style={{
                                borderRadius    : '50%',
                                height          : '35px',
                                width           : '35px',
                                paddingTop      : '3px',
                                boxShadow       : 'rgba(4, 6, 4, 0.15) 0px 0px 48px 0px',
                            }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polygon stroke='#000' points="19 20 9 12 19 4 19 20"></polygon>
                                <line stroke='#000' x1="5" y1="19" x2="5" y2="5"></line>
                            </svg>
                        </button>
                    )}
                    renderCenterRightControls   = {({ nextSlide }) => (
                        <button
                            onClick={ nextSlide }
                            style={{
                                borderRadius    : '50%',
                                height          : '35px',
                                width           : '35px',
                                paddingTop      : '3px',
                                paddingRight    : '3px',
                                boxShadow       : 'rgba(4, 6, 4, 0.15) 0px 0px 48px 0px',
                            }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polygon stroke='#000' points="5 4 15 12 5 20 5 4"></polygon>
                                <line stroke='#000' x1="19" y1="5" x2="19" y2="19"></line>
                            </svg>
                        </button>
                    )}
                >
                    <Person
                        name=" Jeels - Ideen müssen zum Konzept werden "
                        imageUrl="https://i.imgur.com/cRWtkWX.png"
                        description=' Eine Idee ist der Anfang. Das Konzept ist die konkrete Auseinandersetzung mit Möglichkeiten und ein erster pragmatischer Ansatz die Idee zum Leben zu erwecken. Jeels ist ein Spinner und damit genau der richtige, um mit Euch Ideen zu diskutieren, weiterzuentwickeln und Tipps zu geben, wie diese Idee langfristig Realität werden kann. '
                        facebookLink="https://www.facebook.com/YoungJeelZ"
                        instagramLink="https://www.instagram.com/YoungJeelZ/"
                        overwittenStyles={{
                            minHeight           : '800px',
                            maxHeight           : '65vh',
                            background          : '#000',
                            margin              : '20px',
                            textAlign           : 'center',
                            borderRadius        : '10px',
                            boxShadow           : 'rgba(250, 248, 250, 0.15) 0px 0px 48px 0px',
                            color               : '#FFF',
                        }}
                    />
                    <Person
                        name=" Lukas - Der Mann für´s Detail "
                        imageUrl="https://i.imgur.com/SPmGDdT.png"
                        description="Das Design gibt jedem Werk eine Identität in jedem noch so kleinen Detail. Lukas ist unser Designer und betreut uns neben seinem eigenen Soundsystem Magazin Dubting. Er hat bereits viele Designs für namenhafte Firmen erstellt und lässt die Expertise immer wieder in unsere Projekte mit einfließen und schafft so eine unvergleichbare Symbiose zwischen konservativer Professionalität und frischem Wind. Eines seiner Werke: Unser Design."
                        facebookLink="https://www.facebook.com/lukas.riese"
                        instagramLink="https://www.instagram.com/lukas.riese/"
                    />
                    <Person
                        name=" Abdallah - Jedes Werk benötigt eine Plattform "
                        imageUrl="https://i.imgur.com/qLoeEDK.png"
                        description="Ein unverzichtbarer Teil im eigenen Auftritt ist eine Plattform, auf der sich Kunden, Fans und Interessierte informieren können. Das können neben der klassischen Website auch Datenbank, Blogs oder Apps sein. Wir sind froh Ihn zu unserem Team zählen zu können. Unsere Website: Sein Werk!"
                        facebookLink="https://facebook.com/ryan4747"
                        instagramLink="https://www.instagram.com/so_called_ryan/"
                    />
                    <Person
                        name=" Jeels - Ideen müssen zum Konzept werden "
                        imageUrl="https://i.imgur.com/cRWtkWX.png"
                        description=' Eine Idee ist der Anfang. Das Konzept ist die konkrete Auseinandersetzung mit Möglichkeiten und ein erster pragmatischer Ansatz die Idee zum Leben zu erwecken. Jeels ist ein Spinner und damit genau der richtige, um mit Euch Ideen zu diskutieren, weiterzuentwickeln und Tipps zu geben, wie diese Idee langfristig Realität werden kann. '
                        facebookLink="https://www.facebook.com/YoungJeelZ"
                        instagramLink="https://www.instagram.com/YoungJeelZ/"
                        overwittenStyles={{
                            minHeight           : '800px',
                            maxHeight           : '65vh',
                            background          : '#EEE',
                            margin              : '20px',
                            textAlign           : 'center',
                            borderRadius        : '10px',
                            boxShadow           : 'rgba(250, 248, 250, 0.15) 0px 0px 48px 0px',
                            color               : '#000',
                        }}
                    />
                    <Person
                        name=" Lukas - Der Mann für´s Detail "
                        imageUrl="https://i.imgur.com/SPmGDdT.png"
                        description="Das Design gibt jedem Werk eine Identität in jedem noch so kleinen Detail. Lukas ist unser Designer und betreut uns neben seinem eigenen Soundsystem Magazin Dubting. Er hat bereits viele Designs für namenhafte Firmen erstellt und lässt die Expertise immer wieder in unsere Projekte mit einfließen und schafft so eine unvergleichbare Symbiose zwischen konservativer Professionalität und frischem Wind. Eines seiner Werke: Unser Design."
                        facebookLink="https://www.facebook.com/lukas.riese"
                        instagramLink="https://www.instagram.com/lukas.riese/"
                    />
                    <Person
                        name=" Abdallah - Jedes Werk benötigt eine Plattform "
                        imageUrl="https://i.imgur.com/qLoeEDK.png"
                        description="Ein unverzichtbarer Teil im eigenen Auftritt ist eine Plattform, auf der sich Kunden, Fans und Interessierte informieren können. Das können neben der klassischen Website auch Datenbank, Blogs oder Apps sein. Wir sind froh Ihn zu unserem Team zählen zu können. Unsere Website: Sein Werk!"
                        facebookLink="https://facebook.com/ryan4747"
                        instagramLink="https://www.instagram.com/so_called_ryan/"
                    />
                </Carousel>
        );
        else
        return (<div/>)
      }
  }