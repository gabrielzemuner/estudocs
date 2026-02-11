import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

function autoGroup(label, directory) {
  return { label, collapsed: true, autogenerate: { directory } };
}

function autoGroupNested(label, subgroups) {
  return {
    label,
    collapsed: true,
    items: subgroups.map(([subLabel, subDir]) => autoGroup(subLabel, subDir)),
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://gabrielzemuner.github.io",
  base: "/estudocs/",

  integrations: [
    starlight({
      title: "EstuDocs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        { label: 'Playground', slug: 'playground' },
        autoGroup('Docker', 'docker'),
        { label: 'Dúvidas Gerais', slug: 'duvidas-gerais' },
        autoGroup('Anotações Gerais', 'anotacoes-gerais'),
        autoGroup('React', 'react'),
        autoGroup('JS antes do React', 'js-antes-do-react'),
        autoGroupNested('Celke', [
          ['Laravel', 'celke/laravel'],
          ['React', 'celke/react'],
        ]),
      ],
      // sidebar: [
      //   { label: "Docker", autogenerate: { directory: "docker" } },
      //   { label: "Dúvidas Gerais", slug: "duvidas-gerais" },
      //   { label: "Anotações Gerais", autogenerate: { directory: "anotacoes-gerais" } },
      //   { label: "React", autogenerate: { directory: "react" } },
      //   { label: "JS antes do React", autogenerate: { directory: "js-antes-do-react" } },
      //   { label: "Celke", collapsed: true, items: [
      //       { label: "Laravel", collapsed: true, autogenerate: { directory: "celke/laravel" } },
      //       // { label: 'React', collapsed: true, autogenerate: { directory: 'celke/react' } },
      //     ],
      //   },
      // ],
    }),
  ],
});
