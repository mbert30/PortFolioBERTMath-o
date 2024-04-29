class ApiTraduction
{
    static getTrad(langue) {
        switch (langue) {
            case "EN":
                return {
                    navBar1: "About me",
                    navBar2: "My studies",
                    navBar3: "My professional experiences",
                    navBar4: "Contact me",
                    navBar5: "My blog"
                }
            case "FR":
            default:
                return {
                    navBar1: "À propos",
                    navBar2: "Mon parcours",
                    navBar3: "Mes expériences professionnelles",
                    navBar4: "Me contacter",
                    navBar5: "Mon blog"
                }
        }
    }

}

export default ApiTraduction;