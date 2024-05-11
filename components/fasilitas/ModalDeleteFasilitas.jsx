"use client";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { deleteFasilitas } from "@/api/fasilitas";
import { CgDanger } from "react-icons/cg";

function ModalDeleteFasilitas({ isOpen, onClose, selectedFasilitas, getData }) {
  const onSubmit = async () => {
    try {
      await deleteFasilitas(selectedFasilitas.id_fasilitas);
      await getData();
      await onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hapus Fasilitas</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CgDanger
            color="red"
            style={{ width: 70, height: 70, margin: "auto", marginBottom: 10 }}
          />
          <Text align={"center"} mb={4}>
            Apakah anda yakin ingin menghapus data ini?
          </Text>
        </ModalBody>
        <Flex justifyContent={"center"} justifySelf={"center"} mb={4}>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Batal
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              onSubmit();
            }}
          >
            Hapus
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

export default ModalDeleteFasilitas;
