export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { __component: { text_grid = [], image_grid = [] } = '' } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        // return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    background,
    sectionId,
    html,
  };
};

export const mapTextGrid = (section = {}) => {
  /*      {
        "__component": "section.section-content",
        "_id": "602fdf2d540c00269e056173",
        "title": "news coverage and some surprises",
        "content": "<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>",
        "metadata": {
          "background": false,
          "_id": "602fdf2d540c00269e05617a",
          "name": "intro",
          "section_id": "intro",
          "__v": 0,
          "id": "602fdf2d540c00269e05617a"
        },
        "__v": 1,
        "id": "602fdf2d540c00269e056173"
      },
      {
        "__component": "section.section-grid",
        "_id": "602fdf2d540c00269e056174",
        "description": "Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut",
        "title": "My Grid",
        "text_grid": [
          {
            "_id": "602fdf2d540c00269e05617c",
            "title": "Teste 1",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
            "__v": 0,
            "id": "602fdf2d540c00269e05617c"
          },
          {
            "_id": "602fdf2d540c00269e05617d",
            "title": "Teste 2",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
            "__v": 0,
            "id": "602fdf2d540c00269e05617d"
          },
          {
            "_id": "602fdf2d540c00269e05617e",
            "title": "Teste 3",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
            "__v": 0,
            "id": "602fdf2d540c00269e05617e"
          }
        ],
        "image_grid": [],
        "metadata": {
          "background": true,
          "_id": "602fdf2e540c00269e056199",
          "name": "grid-one",
          "section_id": "grid-one",
          "__v": 0,
          "id": "602fdf2e540c00269e056199"
        },
        "__v": 2,
        "id": "602fdf2d540c00269e056174"
      } */

  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component,
    title,
    background,
    sectionId,
    description,
    grid,
  };
};
