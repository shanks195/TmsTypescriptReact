import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { IoIosArrowDropdown, IoIosArrowDropright } from "react-icons/io";
import FormFolderStyle from "./style";
import clsx from "clsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FolderIcon from "assets/images/Group 61038.svg";
import PlusSquareRed from "assets/images/plus.webp";
import PlusSquareBlue from "assets/images/plusblue.webp";
import TrashBlue from "assets/images/trashblue.webp";
import TrashRed from "assets/images/trashred.webp";
import Pencil from "assets/images/pencilblue.webp";
import Checked from "assets/images/checkblue.webp";

import Input from "views/components/base/Input";
import {getTemplateFolderList} from "features/TemplateGroupFolderList/store/slice"
import { useSelector } from "react-redux";

interface FormFolerProps {
  className?: string;
}

interface FormFolerComponent extends FunctionComponent<FormFolerProps> {}

const FormFolder: FormFolerComponent = (props) => {
  const { className } = props;

  const classes = FormFolderStyle();

  const FormFolderClass = clsx(classes.root, className);

  const labelIcon = () => {
    return <img src={FolderIcon} alt="folderIcon" className="Group-61038" />;
  };
  const listFolder = useSelector(getTemplateFolderList)
  return (
    <div className={FormFolderClass}>
      <Typography variant="h6">DANH SÁCH</Typography>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<IoIosArrowDropdown />}
        defaultExpandIcon={<IoIosArrowDropright />}
        sx={{ height: "100%", flexGrow: 1, overflowY: "auto" }}
        className="tree-head"
        disabledItemsFocusable
      >
        <TreeItem
          className="tree-head-item"
          nodeId="treehead"
          // expandIcon='12312'
          label={
            <Box
              className="tree-label-head"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, width: "10%" }}
              >
                STT
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, width: "35%" }}
              >
                tên thư mục
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, width: "25%", paddingLeft: "1%" }}
              >
                SLUG
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, width: "20%", paddingLeft: "2%" }}
              >
                người cập nhật
              </Typography>
              <Box sx={{ fontWeight: 500, width: "15%", textAlign: "right" }}>
                <img
                  src={PlusSquareRed}
                  alt="plus-red"
                  className="action-icon"
                />
                <img src={TrashRed} alt="trash-red" className="action-icon" />
              </Box>
            </Box>
          }
        >
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ flexGrow: 1, overflowY: "auto" }}
            className="tree-table-item"

          >
            {listFolder.map((item, index) => {
              return (
                <TreeItem
                  key={index}
                  nodeId={item.id.toString()}
                  label={
                    <Box
                      className="tree-label-item"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="body2" className="label-stt">
                      </Typography>
                      <Box
                        sx={{ paddingLeft: "1% !important" }}
                        className={
                          item.child?.length > 0
                            ? "label-icon"
                            : "label-icon-child"
                        }
                      >
                        <Box
                          component={labelIcon}
                          color="inherit"
                          sx={{ mr: 1 }}
                        />
                        <Typography variant="body2" className="label-folder">
                          {item.name}
                        </Typography>
                      </Box>
                      <Typography variant="body2" className="label-slug">
                        {item.slug}
                      </Typography>
                      <Box
                        sx={{
                          width: "20%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="body2" className="label-name">
                          {item.updated_by}
                        </Typography>
                        <Typography variant="subtitle1" className="label-time">
                          {item.updated_at}
                        </Typography>
                      </Box>
                      <Typography variant="body2" className="label-action">
                        {item.child.length > 0 ? (
                          <img
                            src={PlusSquareBlue}
                            alt="plus-blue"
                            className="action-icon"
                            onClick={() => {
                              console.log("aloalo");
                            }}
                          />
                        ) : (
                          ""
                        )}
                        <img
                          src={Pencil}
                          alt="pencil-blue"
                          className="action-icon"
                        />
                        <img
                          src={TrashBlue}
                          alt="trash-blue"
                          className="action-icon"
                        />
                      </Typography>
                    </Box>
                  }
                >
                  {item.child?.map((child, childIndex) => {
                    return (
                      <TreeItem
                        nodeId={child.id.toString()}
                        className="tree-label-item"
                        label={
                          <Box
                            className="tree-label-item"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography variant="body2" className="label-stt">
                              {index+childIndex+2}
                            </Typography>
                            <Box className="label-icon-child">
                              <Box
                                component={labelIcon}
                                color="inherit"
                                sx={{ mr: 1 }}
                              />
                              <Typography
                                variant="body2"
                                className="label-folder-child"
                              >
                                {child.name}
                              </Typography>
                            </Box>
                            <Typography variant="body2" className="label-slug">
                              {child.slug}
                            </Typography>
                            <Box
                              sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                variant="body2"
                                className="label-name"
                              >
                                {child.updated_by}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                className="label-time"
                              >
                                {child.updated_at}
                              </Typography>
                            </Box>
                            <Typography
                              variant="body2"
                              className="label-action"
                            >
                              <img
                                src={Pencil}
                                alt="pencil-blue"
                                className="action-icon"
                              />
                              <img
                                src={TrashBlue}
                                alt="trash-blue"
                                className="action-icon"
                              />
                            </Typography>
                          </Box>
                        }
                      ></TreeItem>
                    );
                  })}
                </TreeItem>
              );
            })}
            {/* input */}
            <TreeItem
              nodeId={(listFolder.length+1).toString()}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingY:"8px"
                  }}
                >
                  <Typography variant="body2" sx={{ width: "10%" }}>
                    {listFolder.length+1}
                  </Typography>
                  <Box sx={{ width: "30%",paddingLeft:"1.5%" }}>
                    <Input className="w-75" placeholder="Nhập..."/>
                  </Box>
                  <Box sx={{ width: "50%",paddingLeft:"6.5%" }}>
                    <Input  placeholder="Nhập..."/>
                  </Box>
                  <Box
                    sx={{ width: "30%", textAlign: "right" }}
                  >
                    <img
                      src={Checked}
                      alt="check-blue"
                      className="action-icon"
                    />
                    <img
                      src={TrashBlue}
                      alt="trash-blue"
                      className="action-icon"
                    />
                  </Box>
                </Box>
              }
            ></TreeItem>
          </TreeView>
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default FormFolder;
