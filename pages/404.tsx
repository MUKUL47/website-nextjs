import FolioComponentWrapper from "../components/wrappers/folio-component.wrapper";
import NavbarFooterWrapper from "../components/wrappers/navbar-footer.wrapper";
export default function PageNotFound() {
  return (
    <main>
      <NavbarFooterWrapper className="flex justify-center">
        <FolioComponentWrapper>
          <div className="h-96 flex items-center justify-center w-full">
            <h1 className="sm:text-5xl md:text-7xl text-2xl">Page Not Found</h1>
          </div>
        </FolioComponentWrapper>
      </NavbarFooterWrapper>
    </main>
  );
}
