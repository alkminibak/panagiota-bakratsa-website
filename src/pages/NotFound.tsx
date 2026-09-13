import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="bg-background px-8 py-24 text-center md:py-32">
      <h1 className="text-[30px] font-medium text-brand md:text-4xl">
        Η σελίδα δεν βρέθηκε
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-brand md:text-base">
        Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block text-[15px] font-medium text-brand underline underline-offset-4 md:text-base"
      >
        Επιστροφή στην αρχική
      </Link>
    </section>
  );
};

export default NotFound;
