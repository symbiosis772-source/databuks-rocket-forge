import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const HeroScrollShowcase = () => {
  return (
    <section className="bg-background">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-foreground">
              Transform Your Business with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none gradient-text">
                Modern Technology
              </span>
            </h2>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80"
          alt="Modern dashboard interface"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
};

export default HeroScrollShowcase;
