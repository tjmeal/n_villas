'use client';
import { useEffect, useState } from 'react';
import { SelectPicker } from 'rsuite';
import { getCookie, hasCookie, setCookie } from 'cookies-next';

import greekImage from '/public/images/assets/greek.jpeg';
import englishImage from '/public/images/assets/english.jpeg';
import Image from 'next/image';

const Translate = () => {
    const languages = [
        { label: 'English', value: '/auto/en' },
        { label: `Greek`, value: '/auto/el' },
    ];
    const [selected, setSelected] = useState(null);

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'auto',
                autoDisplay: false,
                includedLanguages: 'el,en', // Updated to include Greek ('el')
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
        );
    };

    useEffect(() => {
        const addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

        if (hasCookie('googtrans')) {
            setSelected(getCookie('googtrans'));
        } else {
            setSelected('/auto/en');
        }
    }, []);

    const langChange = (e, m, evt) => {
        evt.preventDefault();
        const newSelected = decodeURI(e);

        if (hasCookie('googtrans') && newSelected !== selected) {
            setCookie('googtrans', newSelected);
            setSelected(newSelected);
            window.location.reload();
        } else if (!hasCookie('googtrans')) {
            setCookie('googtrans', newSelected);
            setSelected(newSelected);
            window.location.reload();
        }
    };

    return (
        <div className="google">
            {/* <div id="google_translate_element" style={{ width: '0px', height: '0px', position: 'absolute', left: '50%' }}></div> */}
            <SelectPicker
                data={languages}
                style={{ width: 100 }}
                placement="bottomEnd"
                cleanable={false}
                value={selected}
                searchable={false}
                className={'notranslate'}
                menuClassName={'notranslate'}
                onSelect={(e, m, evt) => langChange(e, m, evt)}
                placeholder="Lang"
            />
            <div className="translateImg">
                {selected === '/auto/el' ? ( // Display Greek image if selected language is 'el'
                    <Image src={greekImage} alt="Greek" className="imge" />
                ) : (
                    // Display English image for all other languages
                        <Image src={englishImage} alt="English" className="imge" />
                )}
            </div>
        </div>
    );
};

export default Translate;
