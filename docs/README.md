---
---

{% assign tokens = site.data.aliases.aliases %}
{% assign desktopTokens = site.data.otkit-desktop-typography.token.props %}
{% assign groupedTokens = site.data.otkit-desktop-typography.groupedToken.props %}

{:.code-header}
`otkit-desktop-typography/grouped-token.yml`  
{% for token in groupedTokens %}
{:.{{token[0]}} .token}
{{ token[0] }}  

font-size: {{ token[1].font-size }} /
line-height: {{ token[1].line-height }} /
font-weight: {{ token[1].font-weight }}
{% endfor %}


{:.code-header}
`aliases.yml`  
{% for token in tokens %}
* {:.{{token[0]}}}{{ token[0] }}: {{ token[1].value }}
{% endfor %}


{:.code-header}
`otkit-desktop-typography/token.yml`  
{% for token in desktopTokens %}
* {{ token[0] }}: {{ token[1].value }}
{% endfor %}

### Links
[Text formatting with Markdown](https://guides.github.com/features/mastering-markdown/)  
[Styling Jekyll Markdown](https://digitaldrummerj.me/styling-jekyll-markdown/)  
[OTKit](https://opentable.invisionapp.com/d/main#/projects/boards/5540867)  
[OTKit - Typography](https://opentable.invisionapp.com/d/main#/projects/boards/5540867/175714535)