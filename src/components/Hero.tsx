import officeImage from "../assets/hero.jpg";
import Container from "./Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={officeImage}
        alt="Χώρος συνεδριών του ψυχολογικού γραφείου"
        className="h-[560px] w-full object-cover"
      />

      <div className="absolute inset-0">
        <Container>
          <div className="flex h-[560px] items-center justify-end">
            <div className="w-full max-w-xl text-right ">
              <h1 className="text-5xl font-semibold leading-tight text-brand">
                Παναγιώτα Μπακρατσά
              </h1>

              <p className="mt-4 text-2xl text-brand">
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
