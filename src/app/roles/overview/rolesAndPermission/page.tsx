"use client";

import { useState } from "react";

import DeleteInvitation from "~/components/modals/AdminRolesModals/deleteInvitationModal";
import RolesAndPermissionUtils from "~/components/rolesAndPermission/rolesAndPermissionUtils";
import PendingTable from "~/components/Table/pendingInvitationsTable";
import RoleTable from "~/components/Table/theRoleListTable";
import Overview from "../page";

const RolesAndPermission = () => {
  const [showPending, setShowPending] = useState(false);
  const [showDeletingInvitationModal, setShowDeletingInvitationModal] =
    useState(false);
  const [toViewNameOfRoles, setToViewNameOfRoles] = useState(false);
  const [openDeletedModal, setOpenDeletedModal] = useState(false);

  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [viewTitle, setViewTitle] = useState("");

  return (
    <div>
      <Overview
        title={viewTitle}
        showInviteModal={showInviteModal}
        setShowInviteModal={setShowInviteModal}
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        setShowPending={setShowPending}
        showPending={showPending}
        toViewNameOfRoles={toViewNameOfRoles}
      >
        {toViewNameOfRoles ? (
          // the List of roles
          <div>
            <RoleTable />
          </div>
        ) : (
          <div>
            {showPending ? (
              <PendingTable
                setShowDeletingInvitationModal={setShowDeletingInvitationModal}
                openDeletedModal={openDeletedModal}
                setOpenDeletedModal={setOpenDeletedModal}
              />
            ) : (
              <RolesAndPermissionUtils
                setToViewNameOfRules={setToViewNameOfRoles}
                setViewTitle={setViewTitle}
              />
            )}
            {showDeletingInvitationModal && (
              <DeleteInvitation
                setShowDeletingInvitationModal={setShowDeletingInvitationModal}
                setOpenDeletedModal={setOpenDeletedModal}
              />
            )}
          </div>
        )}
      </Overview>
    </div>
  );
};

export default RolesAndPermission;
