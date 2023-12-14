import React, { useState, useEffect } from 'react';

import greekImage from '/public/images/assets/greek.jpeg';
import englishImage from '/public/images/assets/english.jpeg';
import Image from 'next/image';

const Translate = () => {
    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute(
            'src',
            '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'en',
                // includedLanguages: 'en,ms,ta,zh-CN', // include this for selected languages
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
        );

    };

    return (
        <div className="google">
            <div id="google_translate_element"> </div>
            <div className="translateImg">
                <Image src={englishImage} alt='' className=''/>
            </div>
        </div>
    );
};

export default Translate;
