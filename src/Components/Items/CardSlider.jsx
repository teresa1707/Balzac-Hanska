import { ButtonYellow } from 'Components/MyButton/ButtonYellow'
import './CardSlider.scss'
import DOMPurify from 'dompurify'

export const CardSlider = ({ title, text1, buttonText, text2 }) => {
    return (
        <>
            <div className="left">
                <div className="text1">{title}</div>
                <p
                    className="text2 projectSpan"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(text1),
                    }}
                />

                <p className="text2 projectSpan">{text2}</p>
                <div className="cardBtn">
                    <ButtonYellow text={buttonText} />
                </div>
            </div>
        </>
    )
}
