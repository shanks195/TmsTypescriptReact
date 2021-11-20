import { FunctionComponent } from "react";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import FolderIcon from "assets/images/Group 61038.svg"
import FormGroupStyle from "./style";
import { CgFileDocument } from "react-icons/cg";
import { IListSideBar } from "types/models/templateGroups";

export interface ITreeViewIdName{
  id:string|number,
  name:string,
}
export interface ITreeViewList{
  id:string|number,
  name:string,
  items:ITreeViewIdName[]
}

interface FormGroupProps {
  className?: string;
  options:IListSideBar[];
  handleGetTemplateList(id:string| undefined):void
}
interface FormGroupComponent extends FunctionComponent<FormGroupProps> {}

const FormGroup: FormGroupComponent = (props) => {
  const { className,options,handleGetTemplateList } = props;
  // const [folderId,setFolderId]=useState<string|number>()

  const classes = FormGroupStyle();

  const labelIcon = () => {
    return <Box className="folderImg"><img src={FolderIcon} alt="folderIcon"/></Box>;
  };
  const fileIcon=()=>{
    return <CgFileDocument />
  }

  const formGroupClass = clsx(classes.root, "treeview", className);
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      className={formGroupClass}
    >
      {options.map((item, index) => {
        return (
          <TreeItem
            key={index}
            nodeId={item.id.toString()}
            className="tree-item-child"
            onClick={()=>{
              // if(item.items.length>0){
                
              //   return;
              // }
            
              handleGetTemplateList(item.id)
            }}
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
            {item.items?.length?item.items.map((child, index) => {
              return (
                <TreeItem
                  key={index}
                  nodeId={child.id.toString()}
                  className={child.items?"tree-item":"tree-item-child"}
                  onClick={()=>{
                    // if(items.length>0){
                      
                    //   return;
                    // }
                    // if (item.path){
                    //   history.push(item.path);
                    // }
                    handleGetTemplateList(child.id)
                  }}
                  label={
                    <Box
                      className="tree-label"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
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
                        {child.name}
                      </Typography>
                    </Box>
                  }
                >
                    {child.items?child.items.map((child2,index)=>{
                      return (
                        <TreeItem  onClick={()=>{
                          // if(child2.items.length>0){
                            
                          //   return;
                          // }
                          // if (item.path){
                          //   history.push(item.path);
                          // }
                          handleGetTemplateList(child2.id)
                        }} className="tree-item-child" key={index} nodeId={child2.id} label={
                          <Box
                          className="tree-label"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            className="tree-label-icon"
                            component={fileIcon}
                            color="inherit"
                            sx={{ mr: 1 }}
                          />
                          {/* <Link to="/operate/list/review"> */}
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: "inherit", flexGrow: 1 }}
                            className="tree-label-text"
                          >
                            {child2.name}
                          </Typography>
                          {/* </Link> */}
                        </Box>
                        }/>
                      )
                    }):''}
                </TreeItem>
              );
            }):''}
          </TreeItem>
        );
      })}
    </TreeView>
  );
};

export default FormGroup;
