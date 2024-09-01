const Quote = () => {
    return(
            <figure className="
            before:text-secondary before:-top-[32px] before:left-[16px] before:content-['“'] before:absolute before:text-[64px] before:font-bold before:bg-[linear-gradient(#282C33,_#282C33)] before:[background-size:100%_40%] before:bg-no-repeat
            after:text-secondary after:-bottom-[64px] after:right-[16px] after:content-['“'] after:absolute after:text-[64px] after:font-bold after:bg-[linear-gradient(#282C33,_#282C33)] after:[background-size:100%_40%] after:bg-no-repeat
            text-white border border-secondary relative m-0
            ">
                <blockquote className="p-8 text-2xl font-medium">
                    The only way to do great work is to love what you do.
                </blockquote>
                <figcaption className="text-secondary absolute border border-secondary p-2 right-[-1px] text-[16px]">
                    - Steve Jobs
                </figcaption>
            </figure>
    );

};

export default Quote;