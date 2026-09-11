import officeImage from "../assets/hero.jpg";
import Container from "./Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={officeImage}
        alt="Χώρος συνεδριών του ψυχολογικού γραφείου"
        className="h-[420px] w-full scale-[1.06] object-cover origin-bottom md:h-[500px] md:scale-100 lg:h-[520px] xl:h-[560px]"
      />

      <div className="absolute inset-0">
        <Container>
          <div className="flex h-[420px] items-center justify-end md:h-[500px] lg:h-[520px] xl:h-[560px]">
            <div className="w-full md:max-w-lg md:text-right xl:max-w-xl">
              <h1 className="sr-only md:not-sr-only md:text-4xl md:font-semibold md:leading-tight md:text-brand xl:text-5xl">
                Παναγιώτα Μπακρατσά
              </h1>

              <p className="mt-3 hidden text-xl text-brand md:block xl:mt-4 xl:text-2xl">
                Ψυχολόγος - Ψυχοθεραπεύτρια
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
