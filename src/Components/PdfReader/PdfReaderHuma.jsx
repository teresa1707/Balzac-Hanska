import { CardSlider } from 'Components/Items/CardSlider'
import { pdfHumaFiles } from 'utils/pdfFiles'

export const PdfReaderHuma = () => {
    return (
        <>
            <div>
                {pdfHumaFiles.map((item) => (
                    <CardSlider
                        key={item.id}
                        title={item.title}
                        text1={item.Date}
                        buttonText={item.link}
                    />
                ))}
            </div>
        </>
    )
}
