"use client";

import { useEffect, useState } from "react";

const SocialMediaShare = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`blog-single-share ${isScrolled ? "active" : "d-none"}`}
      id="blog-share"
    >
      <ul className="list-unstyled">
        <li>
          <a
            href="#"
            title='<span className="custom-tooltips">share this</span>'
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 24.8375 7.1625 32 16 32C16.0938 32 16.1875 32 16.2812 31.9937V19.5438H12.8438V15.5375H16.2812V12.5875C16.2812 9.16875 18.3688 7.30625 21.4188 7.30625C22.8813 7.30625 24.1375 7.4125 24.5 7.4625V11.0375H22.4C20.7437 11.0375 20.4188 11.825 20.4188 12.9812V15.5312H24.3875L23.8687 19.5375H20.4188V31.3813C27.1063 29.4625 32 23.3062 32 16Z"
                fill=""
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            title='<span className="custom-tooltips">share this</span>'
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM11.3506 24.1875H7.45386V12.4641H11.3506V24.1875ZM9.40234 10.8633H9.37695C8.06934 10.8633 7.22363 9.96313 7.22363 8.83813C7.22363 7.68774 8.09521 6.8125 9.42822 6.8125C10.7612 6.8125 11.5815 7.68774 11.6069 8.83813C11.6069 9.96313 10.7612 10.8633 9.40234 10.8633ZM25.4014 24.1875H21.5051V17.9158C21.5051 16.3396 20.9409 15.2646 19.531 15.2646C18.4546 15.2646 17.8135 15.9897 17.5317 16.6897C17.4287 16.9402 17.4036 17.2903 17.4036 17.6406V24.1875H13.5071C13.5071 24.1875 13.5581 13.564 13.5071 12.4641H17.4036V14.124C17.9214 13.3252 18.8479 12.189 20.9153 12.189C23.479 12.189 25.4014 13.8645 25.4014 17.4653V24.1875Z"
                fill=""
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            title='<span className="custom-tooltips">share this</span>'
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM23.3054 12.4751C23.3125 12.6326 23.3159 12.7908 23.3159 12.9497C23.3159 17.8025 19.6221 23.3984 12.8669 23.3987H12.8672H12.8669C10.793 23.3987 8.86304 22.7908 7.23779 21.749C7.52515 21.783 7.81763 21.7998 8.11377 21.7998C9.83447 21.7998 11.418 21.2129 12.675 20.2278C11.0674 20.198 9.71191 19.1362 9.24414 17.677C9.46802 17.72 9.69824 17.7434 9.93433 17.7434C10.2695 17.7434 10.5942 17.6982 10.9028 17.614C9.22241 17.2776 7.95654 15.7925 7.95654 14.0142C7.95654 13.9976 7.95654 13.9827 7.95703 13.9673C8.4519 14.2424 9.01782 14.408 9.62036 14.4265C8.63428 13.7686 7.98608 12.6438 7.98608 11.3696C7.98608 10.6968 8.16797 10.0664 8.4834 9.52368C10.2944 11.7458 13.001 13.2073 16.0532 13.3608C15.9902 13.0918 15.9578 12.8115 15.9578 12.5234C15.9578 10.4961 17.6025 8.85132 19.6306 8.85132C20.687 8.85132 21.6411 9.29785 22.3113 10.0117C23.1479 9.84668 23.9336 9.54102 24.6433 9.12036C24.3687 9.97754 23.7866 10.6968 23.0283 11.1516C23.7712 11.0627 24.4792 10.8657 25.1372 10.5732C24.6458 11.3098 24.0225 11.9568 23.3054 12.4751Z"
                fill=""
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            title='<span className="custom-tooltips">share this</span>'
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3506 21.4593C18.6339 22.1761 17.098 22.4319 16.0035 22.4319C14.9058 22.4319 13.3731 22.1761 12.6563 21.4593C12.4866 21.2896 12.2147 21.2896 12.0452 21.4593C11.8755 21.629 11.8755 21.9009 12.0452 22.0704C13.1812 23.2064 15.3636 23.296 16.0035 23.296C16.6434 23.296 18.8226 23.2064 19.962 22.0704C20.1282 21.9007 20.1282 21.6287 19.962 21.4593C19.7923 21.2896 19.5203 21.2896 19.3506 21.4593Z"
                fill=""
              />
              <path
                d="M13.9985 17.6672C13.9985 16.7488 13.2498 16 12.3313 16C11.4131 16 10.6641 16.7488 10.6641 17.6672C10.6641 18.5854 11.4131 19.3345 12.3313 19.3345C13.2498 19.3345 13.9985 18.5857 13.9985 17.6672Z"
                fill=""
              />
              <path
                d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM25.2832 18.1343C25.3184 18.3647 25.3376 18.5984 25.3376 18.8352C25.3376 22.4255 21.1584 25.3345 16.0032 25.3345C10.8479 25.3345 6.6687 22.4255 6.6687 18.8352C6.6687 18.5952 6.68799 18.3584 6.72314 18.1279C5.9104 17.7632 5.34399 16.9473 5.34399 16C5.34399 14.7136 6.38721 13.6672 7.67676 13.6672C8.30396 13.6672 8.87036 13.9136 9.28955 14.3169C10.9087 13.1489 13.1489 12.4031 15.6416 12.3391C15.6416 12.3071 16.8064 6.7583 16.8064 6.7583C16.8289 6.64966 16.8928 6.55664 16.9856 6.49609C17.0784 6.4353 17.1904 6.41602 17.2993 6.43848L21.1777 7.26392C21.4497 6.71362 22.0095 6.33276 22.6655 6.33276C23.5872 6.33276 24.3328 7.07837 24.3328 8C24.3328 8.92163 23.5872 9.66724 22.6655 9.66724C21.7727 9.66724 21.0496 8.96313 21.0081 8.08008L17.5359 7.34082L16.4736 12.3425C18.9216 12.4287 21.1201 13.1711 22.7136 14.3232C23.1328 13.917 23.7024 13.6672 24.3328 13.6672C25.6226 13.6672 26.6655 14.7104 26.6655 16C26.6655 16.9536 26.0928 17.7695 25.2832 18.1343Z"
                fill=""
              />
              <path
                d="M19.6672 15.999C18.7488 15.999 18 16.7478 18 17.6663C18 18.5845 18.7488 19.3335 19.6672 19.3335C20.5854 19.3335 21.3345 18.5845 21.3345 17.6663C21.3345 16.7478 20.5857 15.999 19.6672 15.999Z"
                fill=""
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaShare;