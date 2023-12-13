import React, { useState, useEffect } from 'react';

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

        </div>
    );
};

export default Translate;
