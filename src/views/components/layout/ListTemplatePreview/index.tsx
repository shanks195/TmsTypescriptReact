import { TreeItem, TreeView } from "@mui/lab";
import { FC } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from "@mui/material/Box";
import FolderIcon from "assets/images/Group 61038.svg";
import Typography from "@mui/material/Typography";
import ListTemplateStyle from "./style";
import { IListTemplate } from "types/models/ListTemplate";
import DescriptionIcon from '@mui/icons-material/Description';

export interface ListTemplateRef{
}

export interface ListTemplateProps{
  options: IListTemplate[],
  onChange?(value: number): void, 
}

const ListTemplatePreview: FC<ListTemplateProps> = props => {

  const { options, onChange } = props;
  const classes = ListTemplateStyle();

  const labelIcon = () => {
    return <Box className="folderImg"><img src={FolderIcon} alt="folderIcon"/></Box>;
  };

  const labelIconChild = () => {
    return <Box className="folderImg"><DescriptionIcon /></Box>;
  };

  const handleSelectItem = (value: number) => {
    onChange && onChange(value);
  }

  return <>
    <TreeView
      className={classes.root}
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {
        options.map(item => {
          return <TreeItem 
            key={item.id} 
            nodeId={item.id.toString()}
            onClick={() => handleSelectItem(item.id)}
            label={
                <Box
                  className="tree-label"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box
                    className="tree-label-icon"
                    component={labelIcon}
                    color="inherit"
                    sx={{ mr: 1 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "inherit", flexGrow: 1 }}
                    className="tree-label-text"
                  >
                    {item.name}
                  </Typography>
                </Box>
              }
            >
            {
              item.child.length > 0 ? (
                <>
                  {
                    item.child.map(i => (
                      <TreeItem className={classes.subchildlist} key={i.id} nodeId={i.id.toString()} label={
                        <Box
                          className="tree-label"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Box
                            className="tree-label-icon"
                            component={labelIcon}
                            color="inherit"
                            sx={{ mr: 1 }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: "inherit", flexGrow: 1 }}
                            className="tree-label-text"
                          >
                            {i.name}
                          </Typography>
                        </Box>
                      }>
                        {
                          i.child_template.length > 0 ? (
                            <>
                              {
                                i.child_template.map(c => (
                                  <TreeItem className={classes.subchilditem} key={c.id} nodeId={c.id.toString()} label={
                                    <Box
                                      className="tree-label"
                                      sx={{ display: "flex", alignItems: "center" }}
                                    >
                                      <Box
                                        className="tree-label-icon"
                                        component={labelIconChild}
                                        color="inherit"
                                        sx={{ mr: 1 }}
                                      />
                                      <Typography
                                        variant="body2"
                                        sx={{ fontWeight: "inherit", flexGrow: 1 }}
                                        className="tree-label-text"
                                      >
                                        {c.name}
                                      </Typography>
                                    </Box>
                                  }>
                                  </TreeItem>
                                ))
                              }
                            </>
                          ) : null
                        }
                      </TreeItem>
                    ))
                  }
                </>
              ) : null
            }
          </TreeItem>
        })
      }
    </TreeView>
  </>

}

export default ListTemplatePreview;