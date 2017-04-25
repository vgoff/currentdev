# currentdev
An uploaded build from Windows 10 laptop of the source found in https://github.com/colt082295/southms.git. I cloned this source on my laptop
then editied the package.json to remove the scripts for the AzureWebApp build, changed the gitHub from colton travers to vgoff
and changed the script command to deploy from deployGitHub.
I ran yarn deploy in the front folder and was prompted for my github username and password. The deploy when into my gh_pages branch.
I also edited tools\deployToGitHubPages.js to add my github information.
