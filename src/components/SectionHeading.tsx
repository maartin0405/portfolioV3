const SectionHeading = ({ children }: { children: React.ReactNode }) => {
    return (
        <h2 className="
        before:content-['#'] before:text-primary
        after:bg-primary after:content-[''] after:block after:w-[10vw] after:h-px after:absolute after:translate-x-full after:-translate-y-1/2 after:-right-[16px] after:top-2/4
        text-[32px] font-medium relative float-none clear-both inline-block">{children}</h2>
    );
};

export default SectionHeading;