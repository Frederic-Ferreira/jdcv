import CustomLink from "@app/components/Link"
import { v4 as uid } from "uuid"
import { footer } from "@utils/footer"

function Footer(props) {
  return (
    <div className="flex flex-col gap-10 py-10 px-20">
      <div className="flex justify-between">
        {footer.map((item) => (
          <div key={uid()} className="flex flex-col gap-6">
            <h3 className="text-lg font-normal">{item.title}</h3>
            <div className="flex flex-col gap-2">
              {item.links.map((link) =>
                link.path ? (
                  <CustomLink
                    key={uid()}
                    path={link.path}
                    content={link.name}
                    style="text-sm font-light text-gray-700"
                  />
                ) : (
                  <p className="text-sm font-light text-gray-700" key={uid()}>
                    {link.name}
                  </p>
                )
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-md font-light">© 2023 jiraisdanserchezvous.com</p>
        <div className="flex gap-4 items-center">
          <CustomLink
            path="/"
            content="Politique de confidentialité"
            style="font-light text-gray-700 text-md font-light"
          />
          <CustomLink
            path="/"
            content="Termes & Conditions"
            style="font-light text-gray-700 text-md font-light"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
