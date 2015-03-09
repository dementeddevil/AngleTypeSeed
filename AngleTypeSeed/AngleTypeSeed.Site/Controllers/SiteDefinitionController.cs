using System.Web.Http;

namespace AngleTypeSeed.Site.Controllers
{
	[RoutePrefix("/api/sitedefinition")]
	public class SiteDefinitionController : ApiController
	{
		// GET api/<controller>/state
		public IHttpActionResult Get(string stateName)
		{
			// TODO: Pass state name to our state helper - it will return a string array
			//	containing the list of dependencies.
			// For now we simply assume every state is dependent on a bundle
			//	having the same name together with an implicit dependency on 'app'
			return Ok(
				new
				{
					dependencies = new string[] { "app", "blocks", "core", stateName }
				});
		}
	}
}
