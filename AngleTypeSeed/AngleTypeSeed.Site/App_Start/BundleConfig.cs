using System.Web;
using System.Web.Optimization;

namespace AngleTypeSeed.Site
{
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{
			// Use the development version of Modernizr to develop with and learn from. Then, when you're
			// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
				"~/Scripts/modernizr-*"));

			// Strictly speaking we don't need jQuery but the project this seed
			//	thing was lifted from made use of jQuery plugins so still here!
			bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
				"~/Scripts/jquery-{version}.js"));

			// Given that we are using Angular UI Bootstrap we don't need this bundle
			//bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
			//	"~/Scripts/bootstrap.js",
			//	"~/Scripts/respond.js"));

			bundles.Add(new ScriptBundle("~/bundles/angular").Include(
				"~/Scripts/respond.js",
				"~/Scripts/angular.js",
				"~/Scripts/angular-resource.js",
				"~/Scripts/angular-animate.js",
				"~/Scripts/angular-sanitize.js",
				"~/Scripts/angular-ui-router.js",
				"~/Scripts/angular-ui/ui-bootstrap-tpls.js",
				"~/Scripts/angular-ui/ui-utils.js"));

			// Application feature bundles
			bundles.Add(new ScriptBundle("~/bundles/app").Include(
				"~/app/app.module.js",
				"~/app/app.config.js",
				"~/app/app.run.js"));

			bundles.Add(new ScriptBundle("~/bundles/blocks").Include(
				"~/app/blocks/block.module.js",
				"~/app/blocks/stateloader.service.js"));

			bundles.Add(new ScriptBundle("~/bundles/core").Include(
				"~/Scripts/core.module.js"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
				"~/Content/bootstrap.css",
				"~/Content/site.css"));
		}
	}
}
