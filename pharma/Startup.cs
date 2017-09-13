using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(pharma.Startup))]
namespace pharma
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
